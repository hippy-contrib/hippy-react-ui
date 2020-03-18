import PropTypes from 'prop-types';
export var SearchProps = {
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
  maxLength: PropTypes.number
};
export var SearchDefaultProps = {
  defaultValue: '',
  value: '',
  placeholder: '',
  showCancelButton: true,
  disabled: false,
  maxLength: 999999,
  cancelText: '取消',
  onSubmit: function onSubmit() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onCancel: function onCancel() {},
  onClear: function onClear() {}
};