/**
 * hippy viewPager web版不支持 scrollEnabled，只是简单初始化swiper
 *  1. 需要添加参数 allowTouchMove: false 是否允许滑动
 * 	2. component卸载的时候，没有对应的事件绑定，容易引起内存泄漏
 * 
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPager } from '@hippy/react';

import TabBar from './TabBar';
import TabPanel from './TabPanel';
import { tabPageProps, tabsProps } from './props';
import { ISWEB } from '../../utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,

	},
	bodyContainer: {
		flex: 1,
		// backgroundColor: 'green',
	},
	barContainer: {
		alignSelf: 'stretch',
		height: 36,
		// left: 0,
		// right: 0,
	},
})

const topStyle = StyleSheet.create({
	container: {

	},
	barContainer: {

	}
});

const bottomStyle = StyleSheet.create({
	container: {

	},
	barContainer: {
		marginBottom: 8,
		position: 'absolute',
		zIndex: 999,
	}
})
export class Tabs extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleBarClick = this.handleBarClick.bind(this);
		this.onPageSelected = this.onPageSelected.bind(this);
		const { initialPage, page, tabs } = props;
		const defaultCurrentPage = tabs && tabs[0] && tabs[0].key;
		this.state = {
			currentPage: initialPage || page || defaultCurrentPage,
		}
	}
	handleBarClick (key) {
		const { currentPage } = this.state;
		const { onChange, onTabClick, animated } = this.props;
		onTabClick(key);
		if (key !== currentPage) {
			this.setState({ currentPage: key }, () => {
				this.slideTo(key);
				onChange(key);
			});
		}
	}
	slideTo (currentPage) {
		const { animated } = this.props;
		if (this.viewpager) {
			console.log('animated', animated);
			animated ?
				this.viewpager.setPage(this.getSelectedIndex(currentPage)) : // 有动画
				this.viewpager.setPageWithoutAnimation(this.getSelectedIndex(currentPage)) // 没有动画
		}
	}
	getSelectedIndex (currentPage = this.state.currentPage) {
		const { children } = this.props;
		const index = children.findIndex(({ key }) => key === currentPage);
		return Math.max(index, 0);
	}
	onPageSelected ({ position: index }) {
		const { children } = this.props;
		if (!children.length) return;
		let ind = index;
		if (index < 0 || index > children.length) ind = 0;
		this.setState({ currentPage: children[ind].key })
	}
	setWebBehavior ({ animated, swipeable }) {
		if (this.viewpager) {
			!swipeable && (this.viewpager.viewPagerSwiper.allowTouchMove = false);
			!animated && (this.viewpager.viewPagerSwiper.params.speed = 0);
		}
	}
	componentDidMount () {
		const { animated, swipeable } = this.props;
		ISWEB && this.setWebBehavior({ animated, swipeable });
	}
	render () {
		const { children, tabs, tabBarPosition, swipeable } = this.props;
		const positionStyle = tabBarPosition === 'bottom' ? topStyle : bottomStyle;
		const { currentPage } = this.state;
		return (
			<View style={[styles.container, positionStyle.container, { flexDirection: 'column-reverse'}]}>
				<TabBar
					style={[styles.barContainer]}
					tabBarPosition={tabBarPosition}
					tabs={tabs}
					selected={currentPage}
					onClick={this.handleBarClick}
				/>
				<ViewPager
					ref={(ref) => { this.viewpager = ref; }}
					style={styles.bodyContainer}
					initialPage={0}
					keyboardDismissMode="none"
					onPageSelected={this.onPageSelected}
					scrollEnabled={swipeable}
				>
					{
						children.map(child => <TabPanel
							key={child.key}
							id={child.key}
							selected={currentPage}
							isSelected={child.key === currentPage}>
								{child}
							</TabPanel>
						)
					}
				</ViewPager>
			</View>
		)
	}
}




Tabs.propTypes = {
	tabs: tabsProps,
	tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
	onChange: PropTypes.func,
	initialPage: tabPageProps,
	page: tabPageProps,
	swipeable: PropTypes.bool,
	animated: PropTypes.bool,
	onTabClick: PropTypes.func,
	destroyInactiveTab: PropTypes.bool, // 销毁超出范围Tab
	children: PropTypes.arrayOf(PropTypes.element),
}

Tabs.defaultProps = {
	tabs: [],
	tabBarPosition: 'bottom',
	onChange: () => {},
	onTabClick: () => {},
	animated: true, // 至于在终端有效
	swipeable: false,
}

export default Tabs;
