"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaDefaultPropTypes = exports.TextareaPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fontSize = require("../../utils/fontSize");

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaPropTypes = {
  placeholderTextColor: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  editable: _propTypes.default.bool,
  keyboardType: _propTypes.default.oneOf(['default', 'numeric', 'password', 'email', 'phone-pad', 'search']),
  returnKeyType: _propTypes.default.oneOf(['done', 'go', 'next', 'search', 'send']),
  maxLength: _propTypes.default.number,
  numberOfLines: _propTypes.default.number,
  autoFocus: _propTypes.default.bool,
  underlineColorAndroid: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  style: _types.StyleProps,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onKeyboardWillShow: _propTypes.default.func,
  // ios下键盘的高度
  onSelectionChange: _propTypes.default.func,
  // 选择输入框中的位置，在web下暂时没有应用场景，只做透传
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  size: _propTypes.default.oneOfType([_propTypes.default.oneOf(_fontSize.fontSizes), _propTypes.default.number])
};
exports.TextareaPropTypes = TextareaPropTypes;
var TextareaDefaultPropTypes = {
  placeholderTextColor: 'red',
  defaultValue: '',
  editable: true,
  keyboardType: 'default',
  returnKeyType: 'done',
  maxLength: 999999,
  numberOfLines: 1,
  autoFocus: false,
  underlineColorAndroid: '#ffffff',
  placeholder: '',
  style: {},
  onBlur: function onBlur() {
    return false;
  },
  onChange: function onChange(_ref) {
    var text = _ref.text;
    return false;
  },
  // onContentSizeChange: () => false,
  onKeyboardWillShow: function onKeyboardWillShow(_ref2) {
    var keyboardHeight = _ref2.keyboardHeight;
    return false;
  },
  onSelectionChange: function onSelectionChange(_ref3) {
    var _ref3$selection = _ref3.selection,
        start = _ref3$selection.start,
        end = _ref3$selection.end;
    return false;
  },
  size: 'xs'
};
exports.TextareaDefaultPropTypes = TextareaDefaultPropTypes;