"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultProps = exports.Props = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Props = {
  style: _types.StyleProps,
  selectedIndex: _propTypes.default.number,
  dots: _propTypes.default.bool,
  // 是否显示指示点
  vertical: _propTypes.default.bool,
  // 是否垂直
  autoplay: _propTypes.default.bool,
  // 是否自动播放
  autoplayInterval: _propTypes.default.number,
  // 自动切换的时间间隔
  loop: _propTypes.default.bool,
  // 是否循环播放
  dotStyle: _types.StyleProps,
  // 指示点样式
  dotActiveStyle: _types.StyleProps,
  // 当前激活的指示点样式
  cellSpacing: _propTypes.default.number,
  // 项目之间的间距，
  slideWidth: _propTypes.default.number,
  // 手动设置项目宽度.
  swipeSpeed: _propTypes.default.number,
  // 滑动灵敏度
  afterChange: _propTypes.default.func,
  // 切换面板后的回调函数
  beforeChange: _propTypes.default.func // 切换面板前的回调函数

};
exports.Props = Props;
var DefaultProps = {
  style: {},
  selectedIndex: 0
};
exports.DefaultProps = DefaultProps;