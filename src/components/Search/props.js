import PropTypes from 'prop-types';

export const SearchProps = {
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onCancel: PropTypes.func,
	showCancelButton: PropTypes.bool,
	cancelText: PropTypes.string,
	disabled: PropTypes.bool,
	onClear: PropTypes.func,
	maxLength: PropTypes.number,
}

export const SearchDefaultProps = {
	defaultValue: '',
	value: '',
	placeholder: '',
	showCancelButton: false,
	disabled: false,
	// maxLength: '',
	cancelText: '取消',
	onSubmit: () => {},
	onChange: () => {},
	onFocus: () => {},
	onBlur: () => {},
	onCancel: () => {},
	onClear: () => {},
}