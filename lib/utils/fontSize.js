"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFontSize = exports.fontSizes = exports.fontSizesMap = void 0;
var fontSizesMap = {
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 24,
  xl: 30,
  xxl: 36
};
exports.fontSizesMap = fontSizesMap;
var fontSizes = Object.keys(fontSizesMap);
/**
 * 
 * @param {String | Number} size 字体大小
 */

exports.fontSizes = fontSizes;

var getFontSize = function getFontSize(size) {
  return fontSizesMap[size] || size || fontSizesMap['sm'];
};

exports.getFontSize = getFontSize;