import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

export const Props = {
	style: StyleProps,
	contentContainerStyle: StyleProps,
	selectedIndex: PropTypes.number,
	horizontal: PropTypes.bool, // 是否垂直
	cellSpacing: PropTypes.number, // 项目之间的间距，
	slideWidth: PropTypes.number, // 手动设置项目宽度.
	onChange: PropTypes.func, // 切换面板后的回调函数
}

export const DefaultProps = {
	style: {},
	contentContainerStyle: {},
	selectedIndex: 0,
	horizontal: true,
	cellSpacing: 0,
	onChange: () => {},
}