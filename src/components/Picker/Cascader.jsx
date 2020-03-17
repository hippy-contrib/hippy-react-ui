/**
 * 级联选择器
 */
import React from 'react';
import { ScrollView, View, StyleSheet } from '@hippy/react';

import { CascaderPickerPropTypes, CascaderPickerDefaultProps } from './props';
import SinglePicker from './SinglePicker.jsx';
import { isDef, ISWEB } from '../../utils';

export class CascaderPicker extends React.Component {

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
        if (data && data.length) {
          value[i] = data[0].value;
          data = data[0].children;
        }
      }
    }
    return value;
	}
	constructor(props) {
		super(props);

		this.state = {
			width: 0,
		}
	}
	/**
	 * @description 获取第n级基础数据，可以做个缓存优化
	 * @param {Number} index 级别
	 */
	getCol (index) {
		const { value, data } = this.props;
		if (index === 0) return data;
		let cur = data, curIndex;
		for (let i = 0; i < index; ++i) {
			curIndex = cur.findIndex(item => item.value === value[i] );
			if (curIndex === -1) return [];
			cur = cur[curIndex].children || [];
		}
		return cur;
	}

	handleOnChange (index, selectedValue) {
		const { onChange, value, cols, data } = this.props;
		let newValues = [ ...value ];
		if (newValues[index] === selectedValue) return;
		// 设置当前值
		newValues[index] = selectedValue;

		// 最后一个节点，直接返回数据
		if (index === cols - 1) return onChange(newValues);

		// 将后续节点的值重置
		for (let i = index + 1; i < cols; ++i) newValues[i] = '';

		// 找到后续节点的父节点
		let cur = data;
		for (let i = 0; i <= index; ++i) {
			const selectedIndex = cur.findIndex(item => item.value === newValues[i]);
			if (selectedIndex === -1) return onChange(newValues);
			cur = cur[selectedIndex].children || [];
		}

		// 初始化后续节点的值
		for (let i = index + 1; i < cols; ++i) {
			if (cur && cur.length) {
				newValues[i] = cur[0].value;
				cur = cur[0].children || [];
			}
		}
		onChange(newValues);
	}
	renderSingle (index) {
		const { value, cols } = this.props;
		const { width } = this.state;
		const nodes = this.getCol(index);
		const key = value.slice(0, index).join('_');
		// 是否可以选择，出于非第一个，并且上一级的值为空，则不能编辑
		const disabled = index !== 0 && (isDef(value[index - 1]) || value[index - 1] === '');

		const style = width ? { width: width / cols } : { flex: 1 };
		return (
			<SinglePicker
				key={`cascader_${index}_${key}`}
				index={index}
				selectedValue={value[index]}
				onValueChange={selectedValue => this.handleOnChange(index, selectedValue)}
				style={style}
				disabled={disabled}
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
			<View
				style={{ flexDirection: 'row' }}
				onLayout={({ layout: { width }}) => !this.state.width && this.setState({ width })}>
			{
				Array.from(Array(cols)).map((item, index) => this.renderSingle(index))
			}
			</View>
		);
	}
}

CascaderPicker.propTypes = CascaderPickerPropTypes;
CascaderPicker.defaultProps = CascaderPickerDefaultProps;

export default CascaderPicker;
