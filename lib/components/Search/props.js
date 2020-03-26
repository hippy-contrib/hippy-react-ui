"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchDefaultProps = exports.SearchProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchProps = {
  defaultValue: _propTypes.default.string,
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onSubmit: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  showCancelButton: _propTypes.default.bool,
  cancelText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onClear: _propTypes.default.func,
  maxLength: _propTypes.default.number
};
exports.SearchProps = SearchProps;
var SearchDefaultProps = {
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
exports.SearchDefaultProps = SearchDefaultProps;