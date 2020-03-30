import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

export const Props = {
	style: StyleProps,
	selectedIndex: PropTypes.number,
	dots: PropTypes.bool, // 是否显示指示点
	horizontal: PropTypes.bool, // 是否垂直
	autoplay: PropTypes.bool, // 是否自动播放
	autoplayInterval: PropTypes.number, // 自动切换的时间间隔
	loop: PropTypes.bool, // 是否循环播放
	dotStyle: StyleProps, // 指示点样式
	dotActiveStyle: StyleProps, // 当前激活的指示点样式
	cellSpacing: PropTypes.number, // 项目之间的间距，
	slideWidth: PropTypes.number, // 手动设置项目宽度.
	swipeSpeed: PropTypes.number, // 滑动灵敏度
	afterChange: PropTypes.func, // 切换面板后的回调函数
	beforeChange: PropTypes.func, // 切换面板前的回调函数
}

export const DefaultProps = {
	style: {},
	selectedIndex: 0,
	horizontal: true,
}