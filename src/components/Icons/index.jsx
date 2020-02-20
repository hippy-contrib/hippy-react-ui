/**
 * hippy中的image标签支持svg格式，但是不支持svg标签
 * 可以从react-icons中抽离出svg文件
 */
import React from "react";
import { View, Image, StyleSheet } from "@hippy/react";
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

import { ImageProps, DefaultImageProps } from '../../types/image';

import { iconSizesMap, iconSizes } from '../../utils/iconSize';

const styles = StyleSheet.create({
  containerStyle: {
    height: iconSizesMap['xs'],
    width: iconSizesMap['xs'],
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconStyle: {
    height: iconSizesMap['xs'],
    width: iconSizesMap['xs'],
    backgroundColor: 'green',
  }
})
export class Icon extends React.Component {
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
    const { onClick, disabled } = this.props;
    onClick && !disabled && onClick();
  }
	render () {
    const {
      source,
      disabled,
      containerStyle = {},
      disabledStyle = {},
      iconStyle = {},
      resizeMode,
      onLayout,
      onLoad,
      onLoadStart,
      onLoadEnd,
      onError,
      onProgress,
    } = this.props;

    const statusStyle = disabled ? disabledStyle : {};
		return (
      <View
        style={[styles.containerStyle, this.mergeStyle(containerStyle), statusStyle]}
        onClick={this.handleClick}>
        <Image
          style={[styles.iconStyle, this.mergeStyle(iconStyle), statusStyle, { resizeMode }]}
          source={{ uri: source }}
          onLayout={onLayout}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          onProgress={onProgress}
        />
			</View>
		)
	}
}

export const IconProps = {
  size: PropTypes.oneOfType([PropTypes.oneOf(iconSizes), PropTypes.number]), // icon尺寸
  containerStyle: stylePropType,
  onClick: PropTypes.func,
  ...ImageProps,
}

export const DefaultIconProps = {
  size: 'xs',
  containerStyle: {},
  onClick: () => {},
  ...DefaultImageProps,
}

Icon.propTypes = IconProps;

Icon.defaultProps = DefaultIconProps;

export default Icon