import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

import { LayoutableProps, DefaultLayoutableProps } from '../../types/event';

export const toastPropTypes = {
	...LayoutableProps,
	duration: PropTypes.number,
	onClose: PropTypes.func,
	showMask: PropTypes.bool, // 暂时不支持，都会显示mask
	allowClose: PropTypes.bool,
	visible: PropTypes.bool,
	style: StyleProps,
	titleStyle: StyleProps,
}

export const toastDefaultProps = {
	...DefaultLayoutableProps,
	duration: 3000,
	onClose: () => {},
	showMask: true,
	allowClose: true,
	visible: true,
	style: {},
	titleStyle: {},
}