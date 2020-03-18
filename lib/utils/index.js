import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import { Platform, PixelRatio } from '@hippy/react';
export var ISWEB = Platform.OS === 'web';
export var hairlineWidth = Math.round(0.4 * PixelRatio.get()) / PixelRatio.get();

if (hairlineWidth === 0) {
  hairlineWidth = 1 / PixelRatio.get();
}

export var isType = function isType(val, type) {
  return Object.prototype.toString.call(val) === "[object ".concat(type, "]");
};
export var flattenStyle = function flattenStyle(style) {
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
export var arrayCompare = function arrayCompare(a, b) {
  if (a === b) return true;
  if (a !== b || !a.length || !b.length || a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};
export var isDef = function isDef(v) {
  return v === undefined;
};