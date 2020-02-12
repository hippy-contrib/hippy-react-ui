/**
 * hippy中的image标签支持svg格式，但是不支持svg标签
 * 可以从react-icons中抽离出svg文件
 */
import React from "react";
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { View, ScrollView, Text, Image } from "hippy-react";

class Icon extends React.Component {
	render () {
		return (
			<View>
			dsdf
			</View>
		)
	}
}

Icon.propTypes = {
  type: PropTypes.string, // 默认icon集合，暂时不支持
  name: PropTypes.string, // icon名字，对应于icon集合 暂时不支持
  color: PropTypes.string, // icon 颜色，作用于icon集合
  size: PropTypes.number, // icon尺寸
  Component: PropTypes.elementType,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: stylePropType,
  iconStyle: stylePropType,
  onPress: PropTypes.func,
  reverseColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: stylePropType,
  solid: PropTypes.bool,
  brand: PropTypes.bool,
};

Icon.defaultProps = {
  underlayColor: 'transparent',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white',
  disabled: false,
  type: 'material',
  solid: false,
  brand: false,
};

export default Icon