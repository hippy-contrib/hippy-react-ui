"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Card = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = _react2.StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: _utils.hairlineWidth,
    borderColor: '#dddddd',
    borderRadius: 4
  }
});

var Card = function Card(props) {
  var _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      otherProps = _objectWithoutProperties(props, ["style"]);

  var customStyle = Array.isArray(style) ? style : [style];
  return _react.default.createElement(_react2.View, _extends({
    style: [styles.container].concat(_toConsumableArray(customStyle))
  }, otherProps));
};

exports.Card = Card;
var _default = Card;
exports.default = _default;