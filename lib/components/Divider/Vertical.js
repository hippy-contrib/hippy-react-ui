import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import stylePropType from 'react-style-proptype';
import { hairlineWidth } from '../../utils';
var styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch' // transform: [{ scaleX: 0.5 }],

  }
});
export var Divider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Divider, _React$Component);

  function Divider() {
    _classCallCheck(this, Divider);

    return _possibleConstructorReturn(this, _getPrototypeOf(Divider).apply(this, arguments));
  }

  _createClass(Divider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          color = _this$props.color,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;
      return React.createElement(View, {
        style: [styles.divider, {
          width: width,
          backgroundColor: color
        }, style]
      });
    }
  }]);

  return Divider;
}(React.Component);
Divider.defaultProps = {
  color: '#ddd',
  width: hairlineWidth,
  style: {}
};
export default Divider;