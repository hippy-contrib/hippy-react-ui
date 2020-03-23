"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultImageProps = exports.ImageProps = exports.DefaultImageEventProps = exports.ImageEventProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyleProptype = _interopRequireDefault(require("react-style-proptype"));

var _event = require("./event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var resizeModes = ['cover', 'contain', 'stretch', 'repeat', 'center'];
var ImageEventProps = {
  onLoad: _propTypes.default.func,
  onLoadStart: _propTypes.default.func,
  onLoadEnd: _propTypes.default.func,
  onError: _propTypes.default.func,
  onProgress: _propTypes.default.func
};
exports.ImageEventProps = ImageEventProps;
var DefaultImageEventProps = {
  onLoad: function onLoad() {},
  onLoadStart: function onLoadStart() {},
  onLoadEnd: function onLoadEnd() {},
  onError: function onError() {},
  onProgress: function onProgress() {}
};
exports.DefaultImageEventProps = DefaultImageEventProps;

var ImageProps = _objectSpread({
  iconStyle: _reactStyleProptype.default,
  disabled: _propTypes.default.bool,
  rounded: _propTypes.default.bool,
  disabledStyle: _reactStyleProptype.default,
  source: _propTypes.default.string.isRequired,
  // icon资源地址 or base64图片(不支持svg格式)
  resizeMode: _propTypes.default.oneOf(resizeModes)
}, _event.LayoutableProps, {}, ImageEventProps);

exports.ImageProps = ImageProps;

var DefaultImageProps = _objectSpread({
  disabled: false,
  rounded: true,
  resizeMode: 'cover'
}, _event.DefaultLayoutableProps, {}, DefaultImageEventProps);

exports.DefaultImageProps = DefaultImageProps;