import React from 'react';
import { View, StyleSheet, Animation, ScrollView } from '@hippy/react';

import { TabBarPropTypes, TabBarDefaultProps } from './props';

import { ISWEB, flattenStyle } from '../../utils';
import { COLOR } from './props';
import TabBarItem from './TabBarItem';

const DIVIDERHEIGHT = 1;

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: DIVIDERHEIGHT,
		backgroundColor: COLOR.backgroundColor,
	},
	tabContainer: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		display: 'flex',
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

export class TabBar extends React.Component {

	constructor(props) {
		super(props);

		this.tabLayouts = {};			// 每个tabItem的位置信息
		this.containerLayout = {}; // 可视窗口位置信息
		this.scrollLayout = {} // 滚动条位置信息
		this.state = {
			cursor: {
				left: 0,
				width: 0,
			}
		}

		this.handleOnScroll = this.handleOnScroll.bind(this);
		this.onLayout = this.onLayout.bind(this);

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
	/**
	 * @description 滑动scrollview，使选择的item处于可视窗口中
	 * @param {*} param0 
	 */
	setVisibleView ({ left, width }) {
		const { containerLayout, scrollLayout } = this;
		const visibleSize = { left: scrollLayout.x, right: scrollLayout.x + containerLayout.width };
		// 当前处于可视窗口内，直接返回
		if (left >= visibleSize.left && left + width <= visibleSize.right) {
			return;
		}
		const targetX = left + width / 2 - containerLayout.width / 2;
		this.scrollTo(Math.min(scrollLayout.width - containerLayout.width, Math.max(targetX, 0)));
	}
	scrollTo (x) {
		if (this.scrollerRef) {
			ISWEB ?
				this.scrollerRef.scrollTo(x, 0, true) :
				this.scrollerRef.scrollTo({ x, animated: true })
		}
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
		this.setVisibleView({ left, width: layout.width });
		this.setState({ cursor: { left, width: layout.width } }, () => {
			this.startAnimate();
		});
	}
	handleOnScroll (layout) {
		const { contentOffset, layoutMeasurement, contentSize } = layout
		// hippy 中可以获取到scrollWidth，web通过instance获取
		const width = layout.hasOwnProperty('contentSize') ? contentSize.width : this.scrollerRef.instance.scrollWidth;
		this.scrollLayout = { ...contentOffset, ...layoutMeasurement, width};
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
	onLayout ({ layout }) {
		this.containerLayout = layout
		setTimeout(() => this.getCursorPosition(), 0);
	}
	componentDidMount () {
		this.scrollTo(1);
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
		const { tabs, selected, dividerColor, color, selectedColor, style, tabBarPosition, tabBarItemStyle } = this.props;
		const dividerStyle = tabBarPosition === 'bottom' ? { borderTopWidth: DIVIDERHEIGHT, borderBottomWidth: 0 } : {};
		return (
			<View
				onLayout={this.onLayout}
				style={[ { borderColor: dividerColor, height: 44 }, styles.container, dividerStyle, flattenStyle(style) ]}
			>
				<ScrollView
					ref={ref => this.scrollerRef = ref}
					horizontal={true}
					style={{}}
					onScroll={this.handleOnScroll}
					contentContainerStyle={{}}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={160}
				>
					{
						tabs.map(item => <TabBarItem
							key={item.key}
							style={tabBarItemStyle}
							color={ selected === item.key ? selectedColor : color }
							selected={ selected === item.key }
							title={item.title}
							onClick={event => this.onClick(event, item)}
							onLayout={event => this.handleTabItemLayout(event, item)}
						/>)
					}
					{ this.renderUnderline() }
				</ScrollView>
			</View>
		)
	}
}

TabBar.propTypes = TabBarPropTypes;
TabBar.defaultProps = TabBarDefaultProps;

export default TabBar;
