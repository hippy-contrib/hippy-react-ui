import PropTypes from 'prop-types';
import { LayoutableProps, ClickableProps, DefaultLayoutableProps, DefaultClickableProps } from '../../types/event';
import { StyleProps } from '../../types';

export const tabPageProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const titleProps = PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]);

export const tabsProps = PropTypes.arrayOf((PropTypes.shape({
	key: tabPageProps,
	title: titleProps,
})));

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}

export const TabBarItemPropTypes = {
	...ClickableProps,
	...LayoutableProps,
	color: PropTypes.string,
	title: titleProps,
	selected: PropTypes.bool,
	style: StyleProps,
}

export const TabBarItemDefaultProps = {
	...DefaultClickableProps,
	...DefaultLayoutableProps,
	title: '',
	color: COLOR.textColor,
	selected: false,
	style: {},
}

export const TabBarPropTypes = {
	...ClickableProps,
	tabs: tabsProps,
	tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
	selected: tabPageProps,
	style: StyleProps,
	showUnderLine: PropTypes.bool,
	color: PropTypes.string, // 默认颜色
	selectedColor: PropTypes.string, // 选中的颜色
	selectedStyle: StyleProps,
	dividerColor: PropTypes.string, // 默认下划线颜色，选中下划线颜色跟selectedColor一致
	tabBarItemStyle: StyleProps,
	tabBarSelectedStyle: StyleProps,
}

export const TabBarDefaultProps = {
	...DefaultClickableProps,
	tabs: [],
	color: COLOR.textColor,
	selectedColor: COLOR.selectedTextColor,
	dividerColor: COLOR.divider,
	tabBarPosition: 'top',
	style: {},
	showUnderLine: true,
	tabBarItemStyle: {},
	selectedStyle: {},
	tabBarSelectedStyle: StyleProps,
}


export const TabsPropTypes = {
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
	tabBarItemStyle: StyleProps,
	tabBarSelectedStyle: StyleProps,
	tabBarContainerStyle: StyleProps,
}

export const TabsDefaultProps = {
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
	tabBarContainerStyle: {},
	tabBarItemStyle: {},
	tabBarSelectedStyle: {},
}