/**
 * hippy中的image标签支持svg格式，但是不支持svg标签
 * 可以从react-icons中抽离出svg文件
 */
import React from "react";
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { View, Image, StyleSheet } from "@hippy/react";

import { IconSizes, iconSizesMap } from '../../utils/iconSize';

const styles = StyleSheet.create({
  containerStyle: {
    height: iconSizesMap['md'],
    width: iconSizesMap['md'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: iconSizesMap['md'],
    width: iconSizesMap['md'],
    backgroundColor: 'green',
  }
})
class Icon extends React.Component {
  getIconSize () {
    const { size } = this.props;
    const iconSize = iconSizesMap[size] || size;
    return iconSize;
  }
  /**
   * 计算container和Icon的style
   * 如果设置了size，则设置container的宽和高
   * style优先级
   * containerStyle > size > defaultContainerStyle
   */
  mergeStyle (style) {
    const { rounded } = this.props;
    const iconSize = this.getIconSize();
    if (!iconSize) return style;
    return {
      height: iconSize,
      width: iconSize,
      borderRadius: rounded ? Math.round(iconSize / 2) : 0,
      ...style,
    }
  }
  handleClick = (event) => {
    const { onPress, disabled } = this.props;
    onPress && !disabled && onPress();
  }
	render () {
    const {
      source,
      disabled,
      containerStyle = {},
      disabledStyle = {},
      iconStyle = {},
      resizeMode,
    } = this.props;

    const statusStyle = disabled ? disabledStyle : {};
		return (
      <View
        style={[styles.containerStyle, this.mergeStyle(containerStyle), statusStyle]}
        onClick={this.handleClick}>
        <Image
          style={[styles.iconStyle, this.mergeStyle(iconStyle), statusStyle]}
          source={{ uri: source }}
          resizeMode={resizeMode}
          onError={(e) => console.log('load img error', e)}
        />
			</View>
		)
	}
}

Icon.propTypes = {
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
  resizeMode: PropTypes.oneOfType(Object.keys(Image.resizeMode)),
};

Icon.defaultProps = {
  // underlayColor: 'transparent',
  // reverse: false,
  // raised: false,
  // color: 'black',
  // reverseColor: 'white',
  // type: 'material',
  // solid: false,
  // brand: false,
  size: 'md',
  disabled: false,
  rounded: true,
  resizeMode: 'cover',
};

export default Icon