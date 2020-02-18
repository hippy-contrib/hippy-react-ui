import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import { IconSizes } from '../utils/iconSize';

const resizeModes = ['cover', 'contain', 'stretch', 'repeat', 'center'];

export const propTypes = {
  // type: PropTypes.string, // 默认icon集合，暂时不支持
  // name: PropTypes.string, // icon名字，对应于icon集合 暂时不支持
  // color: PropTypes.string, // icon 颜色，作用于icon集合
  // Component: PropTypes.elementType,
  // underlayColor: PropTypes.string,
  // reverse: PropTypes.bool,
  // raised: PropTypes.bool,
  // reverseColor: PropTypes.string,
  // solid: PropTypes.bool,
  // brand: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.oneOf(IconSizes), PropTypes.number]), // icon尺寸
  containerStyle: stylePropType,
  iconStyle: stylePropType,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  disabledStyle: stylePropType,
  source: PropTypes.string.isRequired, // icon资源地址 or base64图片(不支持svg格式)
  resizeMode: PropTypes.oneOfType(resizeModes),
  onLayout: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadStart: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onError: PropTypes.func,
  onProgress: PropTypes.func,
};

export const defaultProps = {
  // underlayColor: 'transparent',
  // reverse: false,
  // raised: false,
  // color: 'black',
  // reverseColor: 'white',
  // type: 'material',
  // solid: false,
  // brand: false,
  size: 'xs',
  disabled: false,
  rounded: true,
  resizeMode: 'cover',
  onLayout: () => {},
  onLoad: () => {},
  onLoadStart: () => {},
  onLoadEnd: () => {},
  onError: () => {},
  onProgress: () => {},
};