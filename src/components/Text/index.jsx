/**
 * rn Text不支持嵌套
 * 	1. 不支持children中混合 (数字/字符串) 和 <Text></Text> 组件，@hippy/react 会提取出数字或者字符串，导致重复渲染
 * 	2. 需要验证android上的嵌套表现
 * 
 * TODO
 * 	1. 强制规避 数字/字符串 跟 Text组件在同一级，同级全部转化为组件
 */
import React from 'react';
import { Text as HyText } from '@hippy/react';
import PropTypes from 'prop-types';

import { LayoutableProps, ClickableProps, DefaultLayoutableProps, DefaultClickableProps } from '../../types/event';
import { StyleProps, DefaultStyleProps, ellipsizeMode } from '../../types';
import { fontSizesMap, fontSizes } from '../../utils/fontSize';
import { ISWEB } from '../../utils';

/**
 * 解决react-web中Text的嵌套问题
 * 当父节点有Text组件时，使用的是span标签，不换行
 * 否则使用的div标签，换行
 */
const TextContext = React.createContext({ isInAParentText: false, textDepth: 0 });

// hippy-react-web 中 Text组件使用了getChildContext，却没有声明childContextTypes
if (ISWEB) {
	HyText.childContextTypes = {
		isInAParentText: PropTypes.bool,
	}
	HyText.contextType = TextContext;
}
export class Text extends React.Component {
	getStyle () {
		const { size, height, lineHeight, color } = this.props;
		let fontSize = fontSizesMap[size] || size || fontSizesMap['sm'];
		let style = { fontSize, isInAParentText: true };
		height && (style = { ...style, height });
		lineHeight && (style = { ...style, lineHeight });
		color && (style = { ...style, color });
		return style;
	}
	render () {
		const { onLayout, onClick, style, opacity, children, numberOfLines, ellipsizeMode } = this.props;
		const { textDepth } = this.context;
		const customStyle = !Array.isArray(style) ? [ style ] : style;
		return (
			<TextContext.Provider value={{ textDepth: textDepth + 1, isInAParentText: textDepth > 0 }} >
				<HyText
					onLayout={onLayout}
					onClick={onClick}
					opacity={opacity}
					style={[ this.getStyle(), ...customStyle ]}
					numberOfLines={numberOfLines}
					ellipsizeMode={ellipsizeMode}
				>
					{children}
				</HyText>
			</TextContext.Provider>
		);
	}
}

Text.contextType = TextContext;

Text.propTypes = {
	...LayoutableProps,
	...ClickableProps,
	ellipsizeMode: PropTypes.oneOf(ellipsizeMode),
	numberOfLines: PropTypes.number,
	height: PropTypes.number,
	lineHeight: PropTypes.number,
	size: PropTypes.oneOfType([PropTypes.oneOf(fontSizes), PropTypes.number]),
	opacity: PropTypes.number,
	style: StyleProps,
	color: PropTypes.string,
	// children: PropTypes.any,
}

Text.defaultProps = {
	...DefaultLayoutableProps,
	...DefaultClickableProps,
	...DefaultStyleProps,
	size: 'sm',
	opacity: 1,
	ellipsizeMode: 'head',
	color: '#afafaf',
}

export default Text;
