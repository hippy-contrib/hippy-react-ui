import PropTypes from 'prop-types';
import { fontSizes } from '../../utils/fontSize';

import { StyleProps } from '../../types';

export const InputPropTypes = {
	placeholderTextColor: PropTypes.string,
	defaultValue: PropTypes.string,
	editable: PropTypes.bool,
	keyboardType: PropTypes.oneOf(['default', 'numeric', 'password', 'email', 'phone-pad', 'search']),
	returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send']),
	maxLength: PropTypes.number,
	autoFocus: PropTypes.bool,
	underlineColorAndroid: PropTypes.string,
	placeholder: PropTypes.string,
	style: StyleProps,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onKeyboardWillShow: PropTypes.func, // ios下键盘的高度
	onSelectionChange: PropTypes.func, // 选择输入框中的位置，在web下暂时没有应用场景，只做透传
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	size: PropTypes.oneOfType([PropTypes.oneOf(fontSizes), PropTypes.number]),
}

export const InputDefaultPropTypes = {
	placeholderTextColor: 'red',
	defaultValue: '',
	editable: true,
	keyboardType: 'default',
	returnKeyType: 'done',
	maxLength: 999999,
	autoFocus: false,
	underlineColorAndroid: '#ffffff',
	placeholder: '',
	style: {},
	onBlur: () => false,
	onChange: ({ text }) => false,
	// onContentSizeChange: () => false,
	onKeyboardWillShow: ({ keyboardHeight }) => false,
	onSelectionChange: ({ selection: { start, end } }) => false,
	size: 'xs',
}