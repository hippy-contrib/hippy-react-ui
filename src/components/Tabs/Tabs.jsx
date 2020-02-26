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
import { StyleProps } from '../../types';

import { COLOR } from './props';

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

export class Tabs extends React.Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		const { page } = nextProps;
		const { currentPage } = prevState;
		if (page && currentPage !== page) {
			return { currentPage: page }
		}
    return null;
	}
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
		const { onTabClick } = this.props;
		onTabClick(key);
		key !== currentPage && this.slideTo(key); // 将触发 onPageSelected
	}
	slideTo (currentPage) {
		const { animated } = this.props;
		if (this.viewpager) {
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
	/**
	 * 页面选择回调
	 * 更新state中的currentPage
	 * 触发onChange
	 * @param {*} param0 
	 */
	onPageSelected ({ position: index }) {
		const { children, onChange } = this.props;
		if (!children.length) return;
		let ind = index;
		if (index < 0 || index > children.length) ind = 0;
		onChange(children[ind].key);
		this.setState({ currentPage: children[ind].key });
	}
	setWebBehavior ({ animated, swipeable }) {
		// 临时兼容方案，等@hippy/react-web发新版本，支持这两个属性，就可删除
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
		const {
			children,
			tabs,
			tabBarPosition,
			swipeable,
			showUnderLine,
			tabBarColor,
			tabBarSelectedColor,
			tabBarDividerColor,
		} = this.props;
		const isBottom = tabBarPosition === 'bottom';
		const containerStyle = {
			flexDirection: isBottom ? 'column-reverse' : 'column',
		} 
		const { currentPage } = this.state;
		return (
			<View style={[ styles.container, containerStyle ]}>
				<TabBar
					style={{ ...styles.barContainer, marginBottom: isBottom ? 0 : 8 }}
					tabBarPosition={tabBarPosition}
					tabs={tabs}
					selected={currentPage}
					onClick={this.handleBarClick}
					showUnderLine={showUnderLine}
					color={tabBarColor}
					selectedColor={tabBarSelectedColor}
					dividerColor={tabBarDividerColor}
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
	page: tabPageProps, // 选中
	swipeable: PropTypes.bool, // 是否支持滑动切换
	animated: PropTypes.bool, // 切换时是否展示动画
	onTabClick: PropTypes.func, // 点击tab事件
	destroyInactiveTab: PropTypes.bool, // 销毁超出范围Tab
	children: PropTypes.arrayOf(PropTypes.element),
	showUnderLine: PropTypes.bool, // tabbar是否展示选中下划线
	tabBarColor: PropTypes.string, // 默认颜色
	tabBarSelectedColor: PropTypes.string, // 选中的颜色
	tabBarDividerColor: PropTypes.string, // 默认下划线颜色，选中下划线颜色跟selectedColor一致
}

Tabs.defaultProps = {
	tabs: [],
	tabBarPosition: 'top',
	onChange: () => false,
	onTabClick: () => false,
	animated: true, // 至于在终端有效
	swipeable: true,
	showUnderLine: true,
	tabBarColor: COLOR.textColor,
	tabBarSelectedColor: COLOR.selectedTextColor,
	tabBarDividerColor: COLOR.divider,
}

export default Tabs;
