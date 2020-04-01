"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = _react2.StyleSheet.create({
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

var Progress =
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
      var ease_bezier = this.props.ease_bezier;
      var barWidth = Math.floor(containerWidth / 100 * this.getPercent());
      this.scrollAnimation = new _react2.Animation({
        duration: 1000,
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
          _utils.ISWEB && _this3.scrollAnimation.setRef(_this3.barref); // web情况下需要绑定在ref上

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

      var _this$props = this.props,
          style = _this$props.style,
          barStyle = _this$props.barStyle,
          unfilled = _this$props.unfilled,
          animated = _this$props.animated;
      var containerWidth = this.state.containerWidth;
      var fillStyle = unfilled ? {} : {
        backgroundColor: 'transparent'
      };
      var barWidth = Math.floor(containerWidth / 100 * this.getPercent());
      return _react.default.createElement(_react2.View, {
        style: [styles.container, fillStyle, style],
        onLayout: this.startAnimate
      }, containerWidth && _react.default.createElement(_react2.View, {
        ref: function ref(_ref3) {
          return _this4.barref = _ref3;
        },
        style: [styles.barStyle, barStyle, {
          width: animated ? this.scrollAnimation : barWidth
        }]
      }));
    }
  }]);

  return Progress;
}(_react.default.Component);

exports.Progress = Progress;
Progress.propTypes = _props.ProgressProps;
Progress.defaultProps = _props.ProgressDefaultProps;
var _default = Progress;
exports.default = _default;