import PropTypes from 'prop-types';
import { StyleProps } from '../../types';

const Node = {
  value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

const NodeShape = PropTypes.shape(Node);

Node.children = PropTypes.arrayOf(NodeShape);

export const HeaderPropTypes = {
	// headerStyle: StyleProps, // 暂时不提供，web需要固定高度
	title: PropTypes.string,
	okText: PropTypes.string,
	dismissText: PropTypes.string,
	onOk: PropTypes.func,
	onDismiss: PropTypes.func,
}

export const HeaderDefaultProps = {
	okText: '确定',
	dismissText: '取消',
	title: '请选择',
	// headerStyle: {},
	onOk: () => {},
	onDismiss: () => {},
}

export const BasePickerPropTypes = {
	itemStyle: StyleProps,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	cols: PropTypes.number,
}

export const BasePickerDefaultProps = {
	itemStyle: {},
	value: '',
	disabled: false,
	onChange: () => {},
}

export const SinglePickerPropTypes = {
	...BasePickerPropTypes,
	data: PropTypes.arrayOf(PropTypes.shape(Node)),
}

export const SinglePickerDefaultProps = {
	...BasePickerDefaultProps,
	data: [],
	cols: 1,
}


export const CascaderPickerPropTypes = {
	...BasePickerPropTypes,
	value: PropTypes.arrayOf(PropTypes.string),
	data: PropTypes.arrayOf(PropTypes.shape(Node)),
}

export const CascaderPickerDefaultProps = {
	...BasePickerDefaultProps,
	cols: 1,
	value: [],
	data: [],
}

export const MultiPickerPropTypes = {
	...BasePickerPropTypes,
	value: PropTypes.arrayOf(PropTypes.string),
	data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(Node))),
}

export const MultiPickerDefaultProps = {
	...BasePickerDefaultProps,
	cols: 2,
	value: [],
	data: [[],[]],
}

export const ItemProps = {
  className: PropTypes.string,
  value: PropTypes.any,
  children: PropTypes.node,
};

export const PickerPropTypes = {
	data: PropTypes.oneOfType([PropTypes.arrayOf(NodeShape),  PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(Node)))]),
	...HeaderPropTypes,
	// 样式
	indicatorStyle: StyleProps,
	style: StyleProps,
	itemStyle: StyleProps,

	cols: PropTypes.number, // 多列

	value: PropTypes.arrayOf(PropTypes.string),
	defaultValue: PropTypes.arrayOf(PropTypes.string),
	disabled: PropTypes.bool,
	visible: PropTypes.bool,
	cascade: PropTypes.bool, // 是否联动，即picker之间数据是否相关联
	format: PropTypes.func,
	onChange: PropTypes.func,
	onPickerChange: PropTypes.func,
	onVisibleChange: PropTypes.func,
}

export const PickerDefaultProps = {
	data: [],
	...HeaderDefaultProps,
	itemStyle: {},
	indicatorStyle: {},
	visible: false,
	value: [''],
	defaultValue: [''],
	cols: 1,
	disabled: false,
	cascade: true,
	format: values => values,
	onChange: () => {},
	onPickerChange: () => {},
	onVisibleChange: () => {},
}