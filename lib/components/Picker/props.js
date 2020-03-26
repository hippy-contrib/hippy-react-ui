"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PickerDefaultProps = exports.PickerPropTypes = exports.ItemProps = exports.MultiPickerDefaultProps = exports.MultiPickerPropTypes = exports.CascaderPickerDefaultProps = exports.CascaderPickerPropTypes = exports.SinglePickerDefaultProps = exports.SinglePickerPropTypes = exports.BasePickerDefaultProps = exports.BasePickerPropTypes = exports.HeaderDefaultProps = exports.HeaderPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Node = {
  value: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired
};

var NodeShape = _propTypes.default.shape(Node);

Node.children = _propTypes.default.arrayOf(NodeShape);
var HeaderPropTypes = {
  // headerStyle: StyleProps, // 暂时不提供，web需要固定高度
  title: _propTypes.default.string,
  okText: _propTypes.default.string,
  dismissText: _propTypes.default.string,
  onOk: _propTypes.default.func,
  onDismiss: _propTypes.default.func
};
exports.HeaderPropTypes = HeaderPropTypes;
var HeaderDefaultProps = {
  okText: '确定',
  dismissText: '取消',
  title: '请选择',
  // headerStyle: {},
  onOk: function onOk() {},
  onDismiss: function onDismiss() {}
};
exports.HeaderDefaultProps = HeaderDefaultProps;
var BasePickerPropTypes = {
  itemStyle: _types.StyleProps,
  value: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  cols: _propTypes.default.number
};
exports.BasePickerPropTypes = BasePickerPropTypes;
var BasePickerDefaultProps = {
  itemStyle: {},
  value: '',
  disabled: false,
  onChange: function onChange() {}
};
exports.BasePickerDefaultProps = BasePickerDefaultProps;

var SinglePickerPropTypes = _objectSpread({}, BasePickerPropTypes, {
  data: _propTypes.default.arrayOf(_propTypes.default.shape(Node))
});

exports.SinglePickerPropTypes = SinglePickerPropTypes;

var SinglePickerDefaultProps = _objectSpread({}, BasePickerDefaultProps, {
  data: [],
  cols: 1
});

exports.SinglePickerDefaultProps = SinglePickerDefaultProps;

var CascaderPickerPropTypes = _objectSpread({}, BasePickerPropTypes, {
  value: _propTypes.default.arrayOf(_propTypes.default.string),
  data: _propTypes.default.arrayOf(_propTypes.default.shape(Node))
});

exports.CascaderPickerPropTypes = CascaderPickerPropTypes;

var CascaderPickerDefaultProps = _objectSpread({}, BasePickerDefaultProps, {
  cols: 1,
  value: [],
  data: []
});

exports.CascaderPickerDefaultProps = CascaderPickerDefaultProps;

var MultiPickerPropTypes = _objectSpread({}, BasePickerPropTypes, {
  value: _propTypes.default.arrayOf(_propTypes.default.string),
  data: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.shape(Node)))
});

exports.MultiPickerPropTypes = MultiPickerPropTypes;

var MultiPickerDefaultProps = _objectSpread({}, BasePickerDefaultProps, {
  cols: 2,
  value: [],
  data: [[], []]
});

exports.MultiPickerDefaultProps = MultiPickerDefaultProps;
var ItemProps = {
  className: _propTypes.default.string,
  value: _propTypes.default.any,
  children: _propTypes.default.node
};
exports.ItemProps = ItemProps;

var PickerPropTypes = _objectSpread({
  data: _propTypes.default.oneOfType([_propTypes.default.arrayOf(NodeShape), _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.shape(Node)))])
}, HeaderPropTypes, {
  // 样式
  indicatorStyle: _types.StyleProps,
  style: _types.StyleProps,
  itemStyle: _types.StyleProps,
  cols: _propTypes.default.number,
  // 多列
  value: _propTypes.default.arrayOf(_propTypes.default.string),
  defaultValue: _propTypes.default.arrayOf(_propTypes.default.string),
  disabled: _propTypes.default.bool,
  visible: _propTypes.default.bool,
  cascade: _propTypes.default.bool,
  // 是否联动，即picker之间数据是否相关联
  format: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onPickerChange: _propTypes.default.func,
  onVisibleChange: _propTypes.default.func
});

exports.PickerPropTypes = PickerPropTypes;

var PickerDefaultProps = _objectSpread({
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

exports.PickerDefaultProps = PickerDefaultProps;