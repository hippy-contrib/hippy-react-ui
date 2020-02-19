import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import { LayoutableProps, DefaultLayoutableProps } from './event';


const resizeModes = ['cover', 'contain', 'stretch', 'repeat', 'center'];

export const ImageEventProps = {
  onLoad: PropTypes.func,
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onError: PropTypes.func,
  onProgress: PropTypes.func,
}

export const DefaultImageEventProps = {
  onLoad: () => {},
  onLoadStart: () => {},
  onLoadEnd: () => {},
  onError: () => {},
  onProgress: () => {},
}

export const ImageProps = {
  iconStyle: stylePropType,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  disabledStyle: stylePropType,
  source: PropTypes.string.isRequired, // icon资源地址 or base64图片(不支持svg格式)
  resizeMode: PropTypes.oneOf(resizeModes),
  ...LayoutableProps,
  ...ImageEventProps,
};

export const DefaultImageProps = {
  disabled: false,
  rounded: true,
  resizeMode: 'cover',
  ...DefaultLayoutableProps,
  ...DefaultImageEventProps,
};