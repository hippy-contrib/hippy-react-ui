"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDef = exports.arrayCompare = exports.flattenStyle = exports.isType = exports.hairlineWidth = exports.ISWEB = void 0;

var _react = require("@hippy/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ISWEB = _react.Platform.OS === 'web';
exports.ISWEB = ISWEB;

var hairlineWidth = Math.round(0.4 * _react.PixelRatio.get()) / _react.PixelRatio.get();

exports.hairlineWidth = hairlineWidth;

if (hairlineWidth === 0) {
  exports.hairlineWidth = hairlineWidth = 1 / _react.PixelRatio.get();
}

var isType = function isType(val, type) {
  return Object.prototype.toString.call(val) === "[object ".concat(type, "]");
};

exports.isType = isType;

var flattenStyle = function flattenStyle(style) {
  if (!style) return style;
  if (!style || isType(style, 'Object')) return style;

  if (isType(style, 'Array')) {
    var s = {};
    style.forEach(function (item) {
      s = _objectSpread({}, s, {}, flattenStyle(item) || {});
    });
    return s;
  }

  return style;
};

exports.flattenStyle = flattenStyle;

var arrayCompare = function arrayCompare(a, b) {
  if (a === b) return true;
  if (a !== b || !a.length || !b.length || a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

exports.arrayCompare = arrayCompare;

var isDef = function isDef(v) {
  return v === undefined;
};

exports.isDef = isDef;