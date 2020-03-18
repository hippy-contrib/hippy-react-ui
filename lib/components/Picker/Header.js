import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import Button from '../Button';
import Text from '../Text';
import { hairlineWidth } from '../../utils';
import { HeaderPropTypes, HeaderDefaultProps } from './props';
var styles = StyleSheet.create({
  container: {
    height: 42,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: hairlineWidth,
    borderColor: '#cccccc',
    overflow: 'hidden'
  },
  button: {
    borderWidth: 0,
    height: 41,
    // borderBottomWidth: hairlineWidth,
    borderColor: '#cccccc'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 42,
    height: 41.
  }
});
export var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          okText = _this$props.okText,
          dismissText = _this$props.dismissText,
          onOk = _this$props.onOk,
          onDismiss = _this$props.onDismiss,
          title = _this$props.title;
      return React.createElement(View, {
        style: styles.container
      }, React.createElement(Button, {
        style: styles.button,
        onClick: onOk,
        type: "ghost"
      }, dismissText), React.createElement(Text, {
        size: "md",
        style: styles.title
      }, title), React.createElement(Button, {
        style: styles.button,
        onClick: onDismiss,
        type: "ghost"
      }, okText));
    }
  }]);

  return Header;
}(React.Component);
Header.defaultProps = HeaderDefaultProps;
export default Header;