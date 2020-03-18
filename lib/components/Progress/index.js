import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View, Animation } from '@hippy/react';
import { ProgressProps, ProgressDefaultProps } from './props';
import { ISWEB } from '../../utils';
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    height: 4,
    display: 'flex',
    flexDirection: 'row'
  },
  barStyle: {
    backgroundColor: '#108ee9',
    height: 4,
    width: 20
  }
});
export var Progress =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress(props) {
    var _this;

    _classCallCheck(this, Progress);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Progress).call(this, props));
    _this.state = {
      width: 0,
      barWidth: 0
    };
    _this.startAnimate = _this.startAnimate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Progress, [{
    key: "getPercent",
    value: function getPercent() {
      var percent = this.props.percent;
      return Math.max(Math.min(percent, 100), 0) | 0; // | 0 取整
    }
  }, {
    key: "setContainerWidth",
    value: function setContainerWidth(_ref) {
      var _this2 = this;

      var width = _ref.layout.width;
      this.setState({
        containerWidth: width
      }, function () {
        return _this2.startAnimate();
      });
    }
  }, {
    key: "startAnimate",
    value: function startAnimate(_ref2) {
      var _this3 = this;

      var width = _ref2.layout.width;
      var containerWidth = width;
      var _this$props = this.props,
          animated = _this$props.animated,
          ease_bezier = _this$props.ease_bezier;
      var barWidth = Math.floor(containerWidth / 100 * this.getPercent());
      this.scrollAnimation = new Animation({
        duration: animated ? 5000 : 0,
        //动画持续时长
        startValue: 0,
        toValue: barWidth,
        delay: 0,
        //至动画真正开始的延迟时间
        mode: "timing",
        //动画模式，现在只支持timing
        timingFunction: ease_bezier //动画缓动函数

      });
      this.setState({
        barWidth: barWidth,
        containerWidth: containerWidth
      }, function () {
        if (_this3.barref && _this3.scrollAnimation) {
          ISWEB && _this3.scrollAnimation.setRef(_this3.barref); // web情况下需要绑定在ref上

          _this3.scrollAnimation.start();
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scrollAnimation && this.scrollAnimation.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          barStyle = _this$props2.barStyle,
          unfilled = _this$props2.unfilled;
      var containerWidth = this.state.containerWidth;
      var fillStyle = unfilled ? {} : {
        backgroundColor: 'transparent'
      };
      return React.createElement(View, {
        style: [styles.container, fillStyle, style],
        onLayout: this.startAnimate
      }, containerWidth && React.createElement(View, {
        ref: function ref(_ref3) {
          return _this4.barref = _ref3;
        },
        style: [styles.barStyle, barStyle, {
          width: this.scrollAnimation || 0
        }]
      }));
    }
  }]);

  return Progress;
}(React.Component);
Progress.defaultProps = ProgressDefaultProps;
export default Progress;