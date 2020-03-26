"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressDefaultProps = exports.ProgressProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressProps = {
  style: _types.StyleProps,
  // container 样式
  barStyle: _types.StyleProps,
  // bar 样式
  unfilled: _propTypes.default.bool,
  // 是否显示未填充的轨道
  percent: _propTypes.default.number,
  // 百分比， 0<= percent <=100
  animated: _propTypes.default.bool,
  // 是否展示动画
  timingFunction: _propTypes.default.oneOf(['linear', 'ease-in', 'ease-out', 'ease-in-out', 'ease_bezier'])
};
exports.ProgressProps = ProgressProps;
var ProgressDefaultProps = {
  style: {},
  barStyle: {},
  unfilled: true,
  percent: 0,
  animated: true,
  timingFunction: 'ease_bezier'
};
exports.ProgressDefaultProps = ProgressDefaultProps;