import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
export var WebTextArea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WebTextArea, _React$Component);

  function WebTextArea() {
    _classCallCheck(this, WebTextArea);

    return _possibleConstructorReturn(this, _getPrototypeOf(WebTextArea).apply(this, arguments));
  }

  _createClass(WebTextArea, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChangeText = _this$props.onChangeText,
          contentInset = _this$props.contentInset,
          onKeyboardWillShow = _this$props.onKeyboardWillShow,
          onSelectionChange = _this$props.onSelectionChange,
          editable = _this$props.editable,
          multiline = _this$props.multiline,
          numberOfLines = _this$props.numberOfLines,
          keyboardType = _this$props.keyboardType,
          returnKeyType = _this$props.returnKeyType,
          otherProps = _objectWithoutProperties(_this$props, ["onChangeText", "contentInset", "onKeyboardWillShow", "onSelectionChange", "editable", "multiline", "numberOfLines", "keyboardType", "returnKeyType"]);

      var inputType = 'text';

      if (keyboardType) {
        if (keyboardType === 'numeric' || keyboardType === 'phone-pad') {
          inputType = 'tel';
        } else if (keyboardType === 'password') {
          inputType = 'password';
        } else if (keyboardType === 'email') {
          inputType = 'email';
        }
      }

      return React.createElement("textarea", Object.assign({}, otherProps, {
        readOnly: !editable,
        type: inputType,
        rows: numberOfLines,
        onChange: function onChange(event) {
          return onChangeText(event.currentTarget.value);
        }
      }));
    }
  }]);

  return WebTextArea;
}(React.Component);
export default WebTextArea;