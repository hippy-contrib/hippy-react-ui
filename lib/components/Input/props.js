import PropTypes from 'prop-types';
import { fontSizes } from '../../utils/fontSize';
import { StyleProps } from '../../types';
export var InputPropTypes = {
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
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onEndEditing: PropTypes.func,
  onKeyboardWillShow: PropTypes.func,
  // ios下键盘的高度
  onSelectionChange: PropTypes.func,
  // 选择输入框中的位置，在web下暂时没有应用场景，只做透传
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.oneOf(fontSizes), PropTypes.number])
};
export var InputDefaultPropTypes = {
  placeholderTextColor: '#aaaaaa',
  defaultValue: '',
  editable: true,
  keyboardType: 'default',
  returnKeyType: 'done',
  maxLength: 999999,
  autoFocus: false,
  underlineColorAndroid: '#ffffff',
  placeholder: '',
  style: {},
  onBlur: function onBlur() {
    return false;
  },
  onFocus: function onFocus() {
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
  onEndEditing: function onEndEditing() {
    return false;
  },
  size: 'xs'
};