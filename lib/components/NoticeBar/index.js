import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import { NoticeBarPropTypes, NoticeBarDefaultPropTypes } from './props';
import Icon from '../Icon';
import Marquee from './marquee';
import Notice from '../../../assets/notice.png'; // import Cancel from './nb-cancel.png';

import Right from '../../../assets/right.png';
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
  },
  leftIcon: {
    height: 18,
    width: 18,
    marginRight: 8
  },
  body: {
    height: 34,
    lineHeight: 34
  },
  rightIcon: {}
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
      var _this$props = this.props,
          children = _this$props.children,
          marqueeProps = _this$props.marqueeProps;
      return React.createElement(View, {
        style: styles.container
      }, React.createElement(Icon, {
        containerStyle: styles.leftIcon,
        style: {
          height: 18,
          width: 18
        },
        source: Notice
      }), React.createElement(Marquee, marqueeProps, children), React.createElement(Icon, {
        containerStyle: styles.rightIcon,
        style: {
          height: 18,
          width: 18
        },
        source: Right
      }));
    }
  }]);

  return NoticeBar;
}(React.Component);
NoticeBar.defaultProps = NoticeBarDefaultPropTypes;
export default NoticeBar;