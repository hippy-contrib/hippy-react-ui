/**
 * hippy中的image标签支持svg格式，但是不支持svg标签
 * 可以从react-icons中抽离出svg文件
 */
import React from "react";
import { View, Image, StyleSheet } from "@hippy/react";

import { propTypes, defaultProps } from '../../types/image';

import { iconSizesMap } from '../../utils/iconSize';

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
          style={[styles.iconStyle, this.mergeStyle(iconStyle), statusStyle]}
          source={{ uri: source }}
          resizeMode={resizeMode}
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

Icon.propTypes = propTypes;

Icon.defaultProps = defaultProps;

export default Icon