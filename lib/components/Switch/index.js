"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Switch = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@hippy/react");

var _utils = require("../../utils");

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CHECKEDBGCOLOR = '#4dd865';
var UNCHECKEDBGCOLOR = '#ffffff';
var ANDUNCHECKEDBGCOLOR = '#efefef';
var BORDERCOLOR = '#eeeeee';
var SIZE = {
  android: {
    container: 72,
    inner: 36
  },
  ios: {
    container: 52,
    inner: 32
  }
};

var iosStyles = _react2.StyleSheet.create({
  container: {
    height: 32,
    width: SIZE.ios.container,
    borderRadius: 16
  },
  circle: {
    height: 32,
    width: SIZE.ios.inner,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    left: Math.floor(SIZE.ios.container / 2),
    borderColor: BORDERCOLOR
  }
});

var andStyles = _react2.StyleSheet.create({
  container: {
    height: 24,
    width: SIZE.android.container,
    backgroundColor: ANDUNCHECKEDBGCOLOR,
    borderRadius: 2
  },
  circle: {
    height: 22,
    width: SIZE.android.inner,
    borderRadius: 2,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: BORDERCOLOR,
    left: Math.floor(SIZE.android.container / 2)
  }
});

var basicStyles = _react2.StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative'
  },
  checkedContainer: {
    // alignItems: 'flex-end',
    backgroundColor: CHECKEDBGCOLOR
  },
  unCheckedContainer: {
    // alignItems: 'flex-start',
    backgroundColor: UNCHECKEDBGCOLOR,
    borderWidth: 1,
    borderColor: BORDERCOLOR
  },
  disabled: {
    opacity: 0.5
  }
});

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Switch, [{
    key: "getCheckedPosition",
    value: function getCheckedPosition() {
      var platform = this.props.platform;
      var size = platform === 'android' ? SIZE.android : SIZE.ios;
      return size.container - size.inner;
    }
  }, {
    key: "initAnimation",
    value: function initAnimation() {
      this.destroyAnimation();
      this.checkAnimation = new _react2.Animation({
        startValue: 0,
        toValue: this.getCheckedPosition(),
        duration: 240,
        //动画持续时长
        delay: 0,
        //至动画真正开始的延迟时间
        mode: "timing",
        //动画模式，现在只支持timing
        timingFunction: "ease_bezier" //动画缓动函数

      });
      this.unCheckAnimation = new _react2.Animation({
        startValue: this.getCheckedPosition(),
        toValue: 0,
        duration: 240,
        //动画持续时长
        delay: 0,
        //至动画真正开始的延迟时间
        mode: "timing",
        //动画模式，现在只支持timing
        timingFunction: "ease_bezier" //动画缓动函数

      });
      return {
        checkAnimation: this.checkAnimation,
        unCheckAnimation: this.unCheckAnimation
      };
    }
  }, {
    key: "destroyAnimation",
    value: function destroyAnimation() {
      this.checkAnimation && this.checkAnimation.destroy();
      this.unCheckAnimation && this.unCheckAnimation.destroy();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyAnimation();
    }
    /**
     * 根据平台，样式，生成对应的style样式
     */

  }, {
    key: "getContainerStyle",
    value: function getContainerStyle() {
      var _this$props = this.props,
          platform = _this$props.platform,
          checked = _this$props.checked,
          color = _this$props.color,
          disabled = _this$props.disabled;
      var checkedContainer = basicStyles.checkedContainer,
          unCheckedContainer = basicStyles.unCheckedContainer;

      var _this$initAnimation = this.initAnimation(),
          checkAnimation = _this$initAnimation.checkAnimation,
          unCheckAnimation = _this$initAnimation.unCheckAnimation;

      var styles = platform === 'android' ? andStyles : iosStyles;
      var containerStyle = [styles.container, basicStyles.container];
      containerStyle.push(checked ? checkedContainer : unCheckedContainer); // 设置自定义背景颜色

      color && checked && containerStyle.push({
        backgroundColor: color
      });
      disabled && containerStyle.push(basicStyles.disabled); // 配置动画

      this.leftAnimation = checked ? checkAnimation : unCheckAnimation; // setTimeout(() => {
      // 	if (this.circleRef && ISWEB) this.leftAnimation.setRef(this.circleRef);
      // 	this.leftAnimation.start();
      // }, 0);

      return containerStyle;
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault && event.preventDefault();
      event.stopPropagation && event.stopPropagation();
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          onChange = _this$props2.onChange,
          checked = _this$props2.checked,
          disabled = _this$props2.disabled;
      if (disabled) return;
      onClick(event);
      onChange(!checked);
      return true;
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.circleRef && this.leftAnimation) {
        _utils.ISWEB && this.leftAnimation.setRef(this.circleRef);
        this.leftAnimation.start();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
      // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
      //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
      if (prevProps.checked !== this.props.checked) {
        this.animate();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var platform = this.props.platform;
      var styles = platform === 'android' ? andStyles : iosStyles;
      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: this.getContainerStyle(),
          onClick: this.handleClick
        },
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          ref: function ref(_ref) {
            return _this2.circleRef = _ref;
          },
          style: [styles.circle, {
            left: this.leftAnimation
          }]
        }))
      );
    }
  }]);

  return Switch;
}(_react.default.Component);

exports.Switch = Switch;
Switch.propTypes = _objectSpread({}, _types.LayoutableProps, {}, _types.ClickableProps, {
  // style: StyleProps,
  checked: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  color: _propTypes.default.string,
  platform: _propTypes.default.oneOf(['android', 'ios', 'web'])
});
Switch.defaultProps = _objectSpread({}, _types.DefaultLayoutableProps, {}, _types.DefaultClickableProps, {
  // ...DefaultStyleProps,
  checked: false,
  disabled: false,
  onChange: function onChange() {},
  color: CHECKEDBGCOLOR,
  platform: 'ios'
});
var _default = Switch;
exports.default = _default;