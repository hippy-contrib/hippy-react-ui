import { Platform, PixelRatio } from '@hippy/react';

export const ISWEB = Platform.OS === 'web';

export let hairlineWidth = Math.round(0.4 * PixelRatio.get()) / PixelRatio.get();
if (hairlineWidth === 0) {
    hairlineWidth = 1 / PixelRatio.get();
}
