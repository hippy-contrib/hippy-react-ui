import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

export const ProgressProps = {
	style: StyleProps, // container 样式
	barStyle: StyleProps, // bar 样式
	unfilled: PropTypes.bool, // 是否显示未填充的轨道
	percent: PropTypes.number, // 百分比， 0<= percent <=100
	animated: PropTypes.bool, // 是否展示动画
}

export const ProgressDefaultProps = {
	style: {},
	barStyle: {},
	unfilled: true,
	percent: 0,
	animated: true,
}