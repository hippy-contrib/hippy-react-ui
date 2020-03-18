import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { LayoutableProps, DefaultLayoutableProps } from './event';
var resizeModes = ['cover', 'contain', 'stretch', 'repeat', 'center'];
export var ImageEventProps = {
  onLoad: PropTypes.func,
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onError: PropTypes.func,
  onProgress: PropTypes.func
};
export var DefaultImageEventProps = {
  onLoad: function onLoad() {},
  onLoadStart: function onLoadStart() {},
  onLoadEnd: function onLoadEnd() {},
  onError: function onError() {},
  onProgress: function onProgress() {}
};
export var ImageProps = _objectSpread({
  iconStyle: stylePropType,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  disabledStyle: stylePropType,
  source: PropTypes.string.isRequired,
  // icon资源地址 or base64图片(不支持svg格式)
  resizeMode: PropTypes.oneOf(resizeModes)
}, LayoutableProps, {}, ImageEventProps);
export var DefaultImageProps = _objectSpread({
  disabled: false,
  rounded: true,
  resizeMode: 'cover'
}, DefaultLayoutableProps, {}, DefaultImageEventProps);