import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import { Props, DefaultProps } from './props';
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefcec',
    height: 34,
    lineHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: 'row'
  }
});
export var NoticeBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoticeBar, _React$Component);

  function NoticeBar() {
    _classCallCheck(this, NoticeBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NoticeBar).apply(this, arguments));
  }

  _createClass(NoticeBar, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React.createElement(View, {
        style: styles.container
      }, children);
    }
  }]);

  return NoticeBar;
}(React.Component);
NoticeBar.defaultProps = DefaultProps;
export default NoticeBar;