import React from 'react';
import { View, StyleSheet, Animation } from '@hippy/react';
import PropTypes from 'prop-types';

import Text from '../Text';
import { tabPageProps, tabsProps } from './props';
import { StyleProps } from '../../types';
import {
	// StyleProps,
	// DefaultStyleProps,
	ClickableProps,
	DefaultClickableProps,
} from '../../types';
import { ISWEB } from '../../utils';

// const defaultSelectedColor = '#108ee9';
const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}

const DIVIDERHEIGHT = 1;

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	tabContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		display: 'flex',
		borderBottomWidth: DIVIDERHEIGHT,
		backgroundColor: COLOR.backgroundColor,
	},
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: 36,
		lineHeight: 36,
	},
	cursorContainer: {
		height: 2,
		alignSelf: 'stretch',
		position: 'relative',
	},
	cursor: {
		height: 2,
		position: 'absolute',
		bottom: 0,
		left: 0,
	}
})

const BarItem = ({
	title,
	color,
	onClick = (() => {}),
	onLayout= (() => {}),
}) => {
	return (
		<Text
			style={{ ...styles.item, color }}
			onClick={onClick}
			onLayout={onLayout}
		>
			{title}
		</Text>
	);
} 

export class TabBar extends React.Component {

	constructor(props) {
		super(props);

		this.tabLayouts = {};
		this.state = {
			cursor: {
				left: 0,
				width: 0,
			}
		}
	}
	onClick (event, { key }) {
		event.preventDefault && event.preventDefault();
		event.stopPropagation && event.stopPropagation();
		this.props.onClick(key);
		return true;
	}
	handleTabItemLayout ({ layout }, { key }) {
		this.tabLayouts[key] = layout
	}
	getCursorPosition () {
		const { selected, tabs } = this.props;
		const { cursor } = this.state;
		const layout = this.tabLayouts[selected];
		if (!layout) return { left: 0, width: 0 };
		
		let left = 0;
		for (let index = 0; index < tabs.length && tabs[index].key !== selected; ++index) {
			left += this.tabLayouts[tabs[index].key].width;
		}
		
		this.destroyAnimation();
		this.cursorAnimation = new Animation({
			startValue: cursor.left,
			toValue: left,
			duration: 200,   //动画持续时长
			delay: 0,     //至动画真正开始的延迟时间
			mode: "timing",  //动画模式，现在只支持timing
			timingFunction: "ease_bezier"  //动画缓动函数
		});
		this.setState({ cursor: { left, width: layout.width } }, () => {
			this.startAnimate();
		});
	}
	startAnimate () {
		if (this.cursorRef && this.cursorAnimation) {
			ISWEB && this.cursorAnimation.setRef(this.cursorRef); // web情况下需要绑定在ref上
			this.cursorAnimation.start();
		}
	}
	destroyAnimation () {
		this.cursorAnimation && this.cursorAnimation.destroy();
	}
	onLayout () {
		setTimeout(() => this.getCursorPosition(), 0);
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		this.props.selected !== prevProps.selected && this.getCursorPosition();
	}
	componentWillUnmount () {
		// 删除动画
		this.destroyAnimation();
	}
	renderUnderline () {
		const { showUnderLine, selectedColor } = this.props;
		const { cursor: { width } } = this.state;
		if (!showUnderLine) return null;
		return (
			<View
				ref={ref => this.cursorRef = ref}
				style={[ styles.cursor, { left: this.cursorAnimation, width, backgroundColor: selectedColor } ]}
			/>
		);
	}
	render () {
		const { tabs, selected, dividerColor, color, selectedColor, style, tabBarPosition } = this.props;
		const propsStyle = Array.isArray(style) ? style : [ style ];
		const dividerStyle = tabBarPosition === 'bottom' ? { borderTopWidth: DIVIDERHEIGHT, borderBottomWidth: 0 } : {};
		return (
			<View style={[styles.container, ...propsStyle]} onLayout={() => this.onLayout()}>
				<View style={[ styles.tabContainer, { borderColor: dividerColor }, dividerStyle ]}>
					{
						tabs.map(item => <BarItem
							key={item.key}
							color={ selected === item.key ? selectedColor : color }
							title={item.title}
							onClick={event => this.onClick(event, item)}
							onLayout={event => this.handleTabItemLayout(event, item)}
						/>)
					}
				</View>
				{ this.renderUnderline() }
			</View>
		)
	}
}

TabBar.propTypes = {
	...ClickableProps,
	tabs: tabsProps,
	tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
	selected: tabPageProps,
	style: StyleProps,
	showUnderLine: PropTypes.bool,
	color: PropTypes.string, // 默认颜色
	selectedColor: PropTypes.string, // 选中的颜色
	dividerColor: PropTypes.string, // 默认下划线颜色，选中下划线颜色跟selectedColor一致
}

TabBar.defaultProps = {
	...DefaultClickableProps,
	tabs: [],
	color: COLOR.textColor,
	selectedColor: COLOR.selectedTextColor,
	dividerColor: COLOR.divider,
	tabBarPosition: 'top',
	style: {},
	showUnderLine: false,
}

export default TabBar;
