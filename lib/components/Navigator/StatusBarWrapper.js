"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StatusBarWrapper = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WINDOWSIZE = _react2.Dimensions.get('window');

var STATUSBARHEIGHT = WINDOWSIZE.statusBarHeight;

var StatusBarWrapper = function StatusBarWrapper(_ref) {
  var props = _ref.props,
      children = _ref.children;

  if (!_react.default.Children.only(children)) {
    console.warn('StatusBarWrapper only has one child');
    return children;
  }

  var style = (0, _utils.flattenStyle)(children.props.style || {});
  var wrapperStyle = {
    paddingTop: (style.paddingTop || 0) + STATUSBARHEIGHT
  };
  style.height && (wrapperStyle.height = STATUSBARHEIGHT + style.height);
  return (
    /*#__PURE__*/
    _react.default.createElement(children.type, _extends({}, children.props, props, {
      style: _objectSpread({}, style, {}, wrapperStyle)
    }))
  );
};

exports.StatusBarWrapper = StatusBarWrapper;
var _default = StatusBarWrapper;
exports.default = _default;