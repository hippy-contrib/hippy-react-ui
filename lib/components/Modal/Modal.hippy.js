"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HippyModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _event = require("../../utils/event");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * visible: PropTypes.bool,
	// transparent: PropTypes.bool,
	animated: PropTypes.bool,
	darkStatusBarText: PropTypes.bool, // 是否是亮色主体文字，默认字体是黑色的，改成 true 后会认为 Modal 背景为暗色调，字体就会改成白色。
	immersionStatusBar: PropTypes.bool, // > Android Only
	autoHideStatusBar: PropTypes.bool,
	animationType: PropTypes.oneOf(['none', 'slide', 'fade', 'slide_fade']),
	// supportedOrientations: PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),
	showMask: PropTypes.bool, // 是否显示蒙层
	closeMaskOnClick: PropTypes.bool, // 是否点击蒙层关闭
	style: StyleProps, // Modal样式
	maskStyle: StyleProps, // 蒙层样式
	onRequestClose: PropTypes.func,
	onShow: PropTypes.func,
	onDismiss: PropTypes.func,
	onOrientationChange: PropTypes.func,
 */
var HippyModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HippyModal, _React$Component);

  function HippyModal(props) {
    var _this;

    _classCallCheck(this, HippyModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HippyModal).call(this, props));
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HippyModal, [{
    key: "handleMaskClick",
    value: function handleMaskClick(event) {
      var onMaskClick = this.props.onMaskClick;
      onMaskClick(event);
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          animation = _this$props.animation,
          animated = _this$props.animated,
          transparent = _this$props.transparent,
          maskStyle = _this$props.maskStyle,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["children", "animation", "animated", "transparent", "maskStyle", "style"]);

      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.Modal, _extends({}, otherProps, {
          transparent: true,
          animated: animated,
          animationType: animated ? animation : 'none'
        }),
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: [_styles.styles.mask, transparent ? {
            backgroundColor: 'transparent'
          } : {}, maskStyle, style],
          onClick: this.handleMaskClick
        }, children))
      );
    }
  }]);

  return HippyModal;
}(_react.default.Component);

exports.HippyModal = HippyModal;
HippyModal.propTypes = _props.modalPropTypes;
HippyModal.defaultProps = _props.modalDefaultProps;
var _default = HippyModal;
exports.default = _default;