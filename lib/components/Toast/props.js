"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toastDefaultProps = exports.toastPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

var _event = require("../../types/event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toastPropTypes = _objectSpread({}, _event.LayoutableProps, {
  duration: _propTypes.default.number,
  onClose: _propTypes.default.func,
  showMask: _propTypes.default.bool,
  // 暂时不支持，都会显示mask
  allowClose: _propTypes.default.bool,
  visible: _propTypes.default.bool,
  style: _types.StyleProps,
  titleStyle: _types.StyleProps
});

exports.toastPropTypes = toastPropTypes;

var toastDefaultProps = _objectSpread({}, _event.DefaultLayoutableProps, {
  duration: 3000,
  onClose: function onClose() {},
  showMask: true,
  allowClose: true,
  visible: true,
  style: {},
  titleStyle: {}
});

exports.toastDefaultProps = toastDefaultProps;