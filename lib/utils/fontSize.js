export var fontSizesMap = {
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 24,
  xl: 30,
  xxl: 36
};
export var fontSizes = Object.keys(fontSizesMap);
/**
 * 
 * @param {String | Number} size 字体大小
 */

export var getFontSize = function getFontSize(size) {
  return fontSizesMap[size] || size || fontSizesMap['sm'];
};