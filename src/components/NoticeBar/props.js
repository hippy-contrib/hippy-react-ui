import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

export const MarqueeProps = {
	loop: PropTypes.bool,
	leading: PropTypes.number, // 首次delay多久之后开启动画
	trailing: PropTypes.number, // 循环动画中，两次动画之间的间隔
	speed: PropTypes.number, // 播放速度，每秒钟移动的像素
	style: StyleProps,
}

export const MarqueeDefaultProps = {
	loop: false,
	leading: 500,
	trailing: 2000,
	speed: 50,
	style: {},
}

export const NoticeBarPropTypes = {
	mode: PropTypes.oneOf(['closable', 'link']),  // 右边icon类型， closeable 表示关闭按钮  link 表示箭头
	icon: PropTypes.element, // 左边icon
	onClick: PropTypes.func, // 右边按钮点击事件
	marqueeProps: PropTypes.shape(MarqueeProps),
	style: StyleProps,
}

export const NoticeBarDefaultPropTypes = {
	mode: 'closable',  // 右边icon类型， closeable 表示关闭按钮  link 表示箭头
	onClick: () => false, // 右边按钮点击事件
	marqueeProps: MarqueeDefaultProps,
	style: {},
}