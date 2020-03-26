"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultProps = exports.Props = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

var _fontSize = require("../../utils/fontSize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = {
  style: _types.StyleProps,
  fontStyle: _types.StyleProps,
  selectedFontStyle: _types.StyleProps,
  defaultValue: _propTypes.default.number,
  // 默认分数, int类型，Math.floor 取整
  maxValue: _propTypes.default.number,
  // 最大个数， int类型，Math.floor 取整
  editable: _propTypes.default.bool,
  // 是否可以编辑
  onChange: _propTypes.default.func,
  // 数值修改触发
  size: _propTypes.default.oneOfType([_propTypes.default.oneOf(_fontSize.fontSizes), _propTypes.default.number]),
  fontItem: _propTypes.default.string,
  // item的样式，文字表示
  selectedFontItem: _propTypes.default.string
};
exports.Props = Props;
var DefaultProps = {
  style: {},
  fontStyle: {},
  selectedFontStyle: {},
  defaultValue: 3,
  maxValue: 5,
  editable: true,
  onChange: function onChange() {},
  size: 'md',
  fontItem: '☆',
  selectedFontItem: '★'
};
exports.DefaultProps = DefaultProps;