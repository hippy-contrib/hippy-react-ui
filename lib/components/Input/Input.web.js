import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { TextInput } from '@hippy/react';
export var WebInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WebInput, _React$Component);

  function WebInput() {
    _classCallCheck(this, WebInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(WebInput).apply(this, arguments));
  }

  _createClass(WebInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          contentInset = _this$props.contentInset,
          onKeyboardWillShow = _this$props.onKeyboardWillShow,
          onSelectionChange = _this$props.onSelectionChange,
          editable = _this$props.editable,
          multiline = _this$props.multiline,
          numberOfLines = _this$props.numberOfLines,
          returnKeyType = _this$props.returnKeyType,
          otherProps = _objectWithoutProperties(_this$props, ["contentInset", "onKeyboardWillShow", "onSelectionChange", "editable", "multiline", "numberOfLines", "returnKeyType"]);

      return React.createElement(TextInput, Object.assign({}, otherProps, {
        readOnly: !editable,
        rows: numberOfLines
      }));
    }
  }]);

  return WebInput;
}(React.Component);
export default WebInput;