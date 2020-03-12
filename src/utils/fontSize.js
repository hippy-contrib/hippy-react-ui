export const fontSizesMap = {
	xxs: 12,
	xs: 14,
	sm: 16,
	md: 18,
	lg: 24,
	xl: 30,
	xxl: 36,
};

export const fontSizes = Object.keys(fontSizesMap);

/**
 * 
 * @param {String | Number} size 字体大小
 */
export const getFontSize = size => fontSizesMap[size] || size || fontSizesMap['sm'];
