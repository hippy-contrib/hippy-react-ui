/**
 * 双picker，两个picker数据相互独立
 */

import React from 'react';
import { ScrollView, View, StyleSheet } from '@hippy/react';

import { MultiPickerPropTypes, MultiPickerDefaultProps } from './props';
import SinglePicker from './SinglePicker';

export class MultiPicker extends React.Component {

	/**
	 * @description 根据参数和props生成默认选中的value值
	 * @param {Object} data 数据
	 * @param {Array} value 当前值
	 */
	static initValues (data, value, cols) {
		// let data = d || this.props.data;
    // let value = val || this.props.value || this.props.defaultValue;
    if (!value || !value.length || value.indexOf(undefined) > -1) {
      value = [];
      for (let i = 0; i < cols; i++) {
				value[i] = '';
        if (data && data.length && data[i] && data[i].length) {
          value[i] = data[i][0].value;
        }
      }
    }
    return value;
	}

	handleOnChange (index, selectedValue) {
		const { value, onChange } = this.props;
		if (value[index] === selectedValue) return;
		const newValues = [ ...value ];
		newValues[index] = selectedValue;
		onChange(newValues);
	}
	renderSingle (index) {
		const { value, data } = this.props;
		const nodes = data[index] || [];

		return (
			<SinglePicker
				key={`multi_${index}`}
				selectedValue={value[index]}
				onValueChange={selectedValue => this.handleOnChange(index, selectedValue)}
				style={{ flex: 1 }}
			>
				{
					nodes.map(node => <SinglePicker.Item key={node.value} value={node.value} label={node.label} />)
				}
			</SinglePicker>
		);
	}
	render () {
		const { cols } = this.props;
		return (
			<View style={{ flexDirection: 'row' }}>
			{
				Array.from(Array(cols)).map((item, index) => this.renderSingle(index))
			}
			</View>
		);
	}
}

MultiPicker.propTypes = MultiPickerPropTypes;
MultiPicker.defaultProps = MultiPickerDefaultProps;

export default MultiPicker;

