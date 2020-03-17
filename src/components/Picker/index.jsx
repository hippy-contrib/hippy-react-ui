import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import Modal from '../Modal';
import SinglePicker from './SinglePicker';
import MultiPicker from './MultiPicker';
import CascaderPicker from './Cascader';
import { PickerPropTypes, PickerDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';
import { hairlineWidth, arrayCompare } from '../../utils';
import Header from './Header';

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		borderColor: '#dddddd',
		borderWidth: hairlineWidth,
		backgroundColor: '#ffffff',
	},
	pickerContainer: {
		// transform: [{ translateY: -50 }],
		
	},
	headerContainer: {
		height: 42,
		paddingHorizontal: 12,
		paddingBottom: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	body: {
		paddingHorizontal: 12,
		paddingBottom: 12,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: '#888888',
	},
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})

/**
 * 
 * itemStyle: {},
	indicatorStyle: {},
	value: '',
	cols: 1,
	okText: '确定',
	dismissText: '取消',
	disabled: false,
	cascade: false,
	onOk: () => {},
	onDismiss: () => {},
	title: () => {},
	format: () => {},
	onChange: () => {},
	onPickerChange: () => {},
	onVisibleChange: () => {},
 */

export class Picker extends React.Component {
	static Item = SinglePicker.Item;

	static getDerivedStateFromProps(nextProps, prevState) {
		const { cascade } = nextProps;
		const Comp = cascade ? CascaderPicker : MultiPicker;
		if (nextProps.hasOwnProperty('value') && !arrayCompare(nextProps.value, prevState.values)) {
			return {
				values: Comp.initValues(nextProps.data, nextProps.value, nextProps.cols),
			}
		}
		return null;
	}

	constructor(props) {
		super(props);

		const { data, value, defaultValue, cascade } = props;

		this.state = {
			values: this.initValues(data, value || defaultValue, cascade)
		}

		this.handleOnChange = this.handleOnChange.bind(this);
	}
	initValues (d, val, cascade) {
		let data = d || this.props.data;
		let value = val || this.props.value || this.props.defaultValue;
		const Comp = cascade ? CascaderPicker : MultiPicker;
		return Comp.initValues(data, value, this.props.cols);
	}
	/**
	 * 
	 * @param {Int} index 获取指定列的值
	 */
	// getValue (index) {
	// 	const { value } = this.props;
	// 	if (!Array.isArray(value)) {
	// 		console.warn('value should be an array');
	// 		return '';
	// 	}
	// 	return value[index] || '';
	// }
	// initEmptyValue () {
	// 	const cols = ( + this.props.cols ) || 1;
	// 	return Array.from(Array(Math.max(cols, 1))).map(() => '');
	// }
	handleOnChange (values) {
		const { onChange } = this.props;
		if (!this.props.hasOwnProperty('value')) this.setState({ values });
		onChange(values);
	}
	render () {
		const {
			children,
			okText,
			dismissText,
			onOk,
			onDismiss,
			title,
			visible,
			cols,
			data,
			cascade,
		} = this.props;
		const { values } = this.state;
		const Comp = cascade ? CascaderPicker : MultiPicker;
		if (!visible) return null;
		return (
			<Modal
				transparent={false}
				darkStatusBarText={true}
				visible={visible}
				animated={true}
				animation={'fade'}
				animationDuration={300}
				onMaskClick={() => {}}
				title={'Picker'}
				okText={'ok'}
				cancelText={'cancel'}
				onOk={() => {}}
				onCancel={() => {}}
				style={{ display: 'block' }}
			>
				<View style={styles.container}>
					<Header
						okText={okText}
						dismissText={dismissText}
						onOk={onOk}
						onDismiss={onDismiss}
						title={title}
					/>
					<Comp
						data={data}
						value={values}
						cols={cols}
						onChange={this.handleOnChange}
						style={[styles.pickerContainer ]}
					>
						{ children }
					</Comp>
				</View>
			</Modal>
		);
	}
}

Picker.propTypes = PickerPropTypes;
Picker.defaultProps = PickerDefaultProps;

export default Picker;
