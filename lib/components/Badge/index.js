import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import Text from '../Text';
import { StyleProps } from '../../types';
import { fontSizes, getFontSize } from '../../utils/fontSize';
import { flattenStyle } from '../../utils';
var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 20,
    minWidth: 10,
    borderRadius: 10,
    backgroundColor: '#ff5b05',
    paddingLeft: 6,
    paddingRight: 6
  },
  badge: {
    color: '#ffffff',
    // backgroundColor: 'green',
    height: 18,
    lineHeight: 18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  corner: {
    right: -8,
    top: -8 // position: 'absolute',
    // right: 0,
    // top: 0,

  },
  dot: {
    height: 8,
    width: 8,
    minWidth: 8,
    minHeight: 8,
    borderRadius: 4,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  dotCorner: {
    right: -4,
    top: -4
  }
});
export var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "getText",
    value: function getText() {
      var _this$props = this.props,
          text = _this$props.text,
          overflowCount = _this$props.overflowCount;
      if (!overflowCount || typeof text !== 'number') return text;
      return text > overflowCount ? "".concat(overflowCount, "+") : text;
    }
  }, {
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var _this$props2 = this.props,
          dot = _this$props2.dot,
          corner = _this$props2.corner,
          style = _this$props2.style;
      var containerStyle = [styles.container];
      var cornerStyle = dot ? styles.dotCorner : styles.corner;
      dot && containerStyle.push(styles.dot);
      corner && containerStyle.push(cornerStyle);
      containerStyle.push(style);
      return containerStyle;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          dot = _this$props3.dot,
          fontStyle = _this$props3.fontStyle,
          fontSize = _this$props3.fontSize;
      var word = this.getText();
      return React.createElement(View, {
        style: this.getContainerStyle()
      }, !dot && React.createElement(Text, {
        color: "#ffffff",
        size: getFontSize(fontSize),
        style: [styles.badge, flattenStyle(fontStyle)]
      }, word));
    }
  }]);

  return Badge;
}(React.Component);
Badge.defaultProps = {
  fontSize: 'xs',
  text: '',
  corner: true,
  dot: false,
  overflowCount: 99,
  style: {},
  fontStyle: {}
};
export default Badge;