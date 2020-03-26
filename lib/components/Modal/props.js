"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmDefaultPropTypes = exports.ConfirmPropTypes = exports.modalDefaultProps = exports.modalPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modalPropTypes = {
  visible: _propTypes.default.bool,
  // transparent: PropTypes.bool,
  animated: _propTypes.default.bool,
  darkStatusBarText: _propTypes.default.bool,
  // 是否是亮色主体文字，默认字体是黑色的，改成 true 后会认为 Modal 背景为暗色调，字体就会改成白色。
  immersionStatusBar: _propTypes.default.bool,
  // > Android Only
  autoHideStatusBar: _propTypes.default.bool,
  animation: _propTypes.default.oneOf(['none', 'slide', 'fade']),
  animationDuration: _propTypes.default.number,
  // 动画时间
  // supportedOrientations: PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),
  showMask: _propTypes.default.bool,
  // 是否显示蒙层
  style: _types.StyleProps,
  // Modal样式
  maskStyle: _types.StyleProps,
  // 蒙层样式
  onRequestClose: _propTypes.default.func,
  onShow: _propTypes.default.func,
  onMaskClick: _propTypes.default.func,
  // 点击mask
  onDismiss: _propTypes.default.func,
  onOrientationChange: _propTypes.default.func
};
exports.modalPropTypes = modalPropTypes;
var modalDefaultProps = {
  visible: false,
  transparent: false,
  animated: true,
  darkStatusBarText: false,
  // 是否是亮色主体文字，默认字体是黑色的，改成 true 后会认为 Modal 背景为暗色调，字体就会改成白色。
  immersionStatusBar: false,
  autoHideStatusBar: false,
  animation: 'slide',
  animationDuration: 500,
  supportedOrientations: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'],
  showMask: true,
  // 是否显示蒙层
  style: {},
  // Modal样式
  maskStyle: {},
  // 蒙层样式
  onRequestClose: function onRequestClose() {},
  onShow: function onShow() {},
  onMaskClick: function onMaskClick() {},
  onDismiss: function onDismiss() {},
  onOrientationChange: function onOrientationChange() {}
};
exports.modalDefaultProps = modalDefaultProps;

var ConfirmPropTypes = _objectSpread({}, modalPropTypes, {
  containerStyle: _types.StyleProps,
  title: _types.ChildrenProps,
  footer: _types.ChildrenProps,
  okText: _propTypes.default.string,
  cancelText: _propTypes.default.string,
  onOk: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  titleStyle: _types.StyleProps,
  bodyStyle: _types.StyleProps,
  footerStyle: _types.StyleProps
});

exports.ConfirmPropTypes = ConfirmPropTypes;

var ConfirmDefaultPropTypes = _objectSpread({}, modalDefaultProps, {
  containerStyle: {},
  title: '',
  okText: 'ok',
  cancelText: 'cancel',
  onOk: function onOk() {
    return false;
  },
  onCancel: function onCancel() {
    return false;
  },
  titleStyle: {}
});

exports.ConfirmDefaultPropTypes = ConfirmDefaultPropTypes;