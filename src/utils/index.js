import { Platform, PixelRatio } from '@hippy/react';

export const ISWEB = Platform.OS === 'web';

export let hairlineWidth = Math.round(0.4 * PixelRatio.get()) / PixelRatio.get();
if (hairlineWidth === 0) {
	hairlineWidth = 1 / PixelRatio.get();
}

export const isType = (val, type) => Object.prototype.toString.call(val) === `[object ${type}]`

export const flattenStyle = style => {
	if (!style) return style;
	if (!style || isType(style, 'Object')) return style;
	
	if (isType(style, 'Array')) {
		let s = {};
		style.forEach(item => {
			s = { ...s, ...(flattenStyle(item) || {} )}
		})
		return s;
	}
	return style;
}

export const arrayCompare = (a, b) => {
	if (a === b) return true;
	if (a !== b || !a.length || !b.length || a.length !== b.length) return false;
	for (let i = 0; i < a.length; ++i) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}

export const isDef = v => v === undefined;
