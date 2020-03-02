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
import { StyleProps, ellipsizeMode } from '../../types';
import { fontSizesMap, fontSizes } from '../../utils/fontSize';
import { ISWEB } from '../../utils';

/**
 * 解决react-web中Text的嵌套问题
 * 当父节点有Text组件时，使用的是span标签，不换行
 * 否则使用的div标签，换行
 */
const TextContext = React.createContext({ isInAParentText: false, textDepth: 0, parentStyle: {} });

// hippy-react-web 中 Text组件使用了getChildContext，却没有声明childContextTypes
if (ISWEB) {
	HyText.childContextTypes = {
		isInAParentText: PropTypes.bool,
	}
	HyText.contextType = TextContext;
}
export class Text extends React.Component {
	getStyle (props = this.props) {
		const { size, height, opacity, lineHeight, color } = props;
		let style = { isInAParentText: true };
		size && (style = { ...style, size: fontSizesMap[size] || size || fontSizesMap['sm'] });
		height && (style = { ...style, height });
		lineHeight && (style = { ...style, lineHeight });
		color && (style = { ...style, color });
		opacity && (style = { ...style, opacity });
		return style;
	}
	/**
	 * 解决text嵌套问题
	 * 如果子节点不是数组，且不是组件，则直接渲染
	 * 如果子节点是组件，则直接渲染
	 * 如果子节点是数组，则遍历每个节点
	 * 	若是组件，直接渲染
	 * 	否认递归使用Text组件
	 * 		样式进行传递
	 */
	renderChildren () {
		const { children, ...otherProps } = this.props;
		if (!Array.isArray(children)) return children;
		return children.map((child, index) => {
			if (React.isValidElement(child)) {
				return <child.type key={`${child.type}_${index}`} { ...child.props } />;
			}
			else {
				return <Text key={`${child.type}_${index}`} { ...otherProps }>{child}</Text>
			}
		});
	}
	render () {
		const { onLayout, onClick, style = {}, opacity = 1, numberOfLines, ellipsizeMode = 'head' } = this.props;
		const { textDepth, parentStyle } = this.context;
		let customStyle = !Array.isArray(style) ? [ style ] : style;
		let pStyle = Array.isArray(parentStyle) ? parentStyle : [ parentStyle ];
		customStyle = [
			...pStyle,
			this.getStyle(),
			...customStyle
		];
		return (
			<TextContext.Provider
				value={{ textDepth: textDepth + 1, isInAParentText: textDepth > 0, parentStyle: customStyle }}
			>
				<HyText
					onLayout={onLayout}
					onClick={onClick}
					opacity={opacity}
					style={customStyle}
					numberOfLines={numberOfLines}
					ellipsizeMode={ellipsizeMode}
				>
					{
						this.renderChildren()
					}
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

/**
 * 去除默认的props，用于嵌套使用组件
 */
Text.defaultProps = {
	...DefaultLayoutableProps,
	...DefaultClickableProps,
	// ...DefaultStyleProps,
	// size: 'sm',
	// opacity: 1,
	// ellipsizeMode: 'head',
	// color: '#afafaf',
}

export default Text;
