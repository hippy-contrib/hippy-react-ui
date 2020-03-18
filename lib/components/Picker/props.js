import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from 'prop-types';
import { StyleProps } from '../../types';
var Node = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
var NodeShape = PropTypes.shape(Node);
Node.children = PropTypes.arrayOf(NodeShape);
export var HeaderPropTypes = {
  // headerStyle: StyleProps, // 暂时不提供，web需要固定高度
  title: PropTypes.string,
  okText: PropTypes.string,
  dismissText: PropTypes.string,
  onOk: PropTypes.func,
  onDismiss: PropTypes.func
};
export var HeaderDefaultProps = {
  okText: '确定',
  dismissText: '取消',
  title: '请选择',
  // headerStyle: {},
  onOk: function onOk() {},
  onDismiss: function onDismiss() {}
};
export var BasePickerPropTypes = {
  itemStyle: StyleProps,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  cols: PropTypes.number
};
export var BasePickerDefaultProps = {
  itemStyle: {},
  value: '',
  disabled: false,
  onChange: function onChange() {}
};
export var SinglePickerPropTypes = _objectSpread({}, BasePickerPropTypes, {
  data: PropTypes.arrayOf(PropTypes.shape(Node))
});
export var SinglePickerDefaultProps = _objectSpread({}, BasePickerDefaultProps, {
  data: [],
  cols: 1
});
export var CascaderPickerPropTypes = _objectSpread({}, BasePickerPropTypes, {
  value: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.shape(Node))
});
export var CascaderPickerDefaultProps = _objectSpread({}, BasePickerDefaultProps, {
  cols: 1,
  value: [],
  data: []
});
export var MultiPickerPropTypes = _objectSpread({}, BasePickerPropTypes, {
  value: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(Node)))
});
export var MultiPickerDefaultProps = _objectSpread({}, BasePickerDefaultProps, {
  cols: 2,
  value: [],
  data: [[], []]
});
export var ItemProps = {
  className: PropTypes.string,
  value: PropTypes.any,
  children: PropTypes.node
};
export var PickerPropTypes = _objectSpread({
  data: PropTypes.oneOfType([PropTypes.arrayOf(NodeShape), PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(Node)))])
}, HeaderPropTypes, {
  // 样式
  indicatorStyle: StyleProps,
  style: StyleProps,
  itemStyle: StyleProps,
  cols: PropTypes.number,
  // 多列
  value: PropTypes.arrayOf(PropTypes.string),
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  visible: PropTypes.bool,
  cascade: PropTypes.bool,
  // 是否联动，即picker之间数据是否相关联
  format: PropTypes.func,
  onChange: PropTypes.func,
  onPickerChange: PropTypes.func,
  onVisibleChange: PropTypes.func
});
export var PickerDefaultProps = _objectSpread({
  data: []
}, HeaderDefaultProps, {
  itemStyle: {},
  indicatorStyle: {},
  visible: false,
  value: [''],
  defaultValue: [''],
  cols: 1,
  disabled: false,
  cascade: true,
  format: function format(values) {
    return values;
  },
  onChange: function onChange() {},
  onPickerChange: function onPickerChange() {},
  onVisibleChange: function onVisibleChange() {}
});