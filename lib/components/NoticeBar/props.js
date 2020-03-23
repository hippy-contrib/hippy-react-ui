"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoticeBarDefaultPropTypes = exports.NoticeBarPropTypes = exports.MarqueeDefaultProps = exports.MarqueeProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MarqueeProps = {
  loop: _propTypes.default.bool,
  leading: _propTypes.default.number,
  // 首次delay多久之后开启动画
  trailing: _propTypes.default.number,
  // 循环动画中，两次动画之间的间隔
  speed: _propTypes.default.number,
  // 播放速度，每秒钟移动的像素
  style: _types.StyleProps
};
exports.MarqueeProps = MarqueeProps;
var MarqueeDefaultProps = {
  loop: false,
  leading: 500,
  trailing: 800,
  speed: 50,
  style: {}
};
exports.MarqueeDefaultProps = MarqueeDefaultProps;
var NoticeBarPropTypes = {
  mode: _propTypes.default.oneOf(['closable', 'link']),
  // 右边icon类型， closeable 表示关闭按钮  link 表示箭头
  icon: _propTypes.default.element,
  // 左边icon
  onClick: _propTypes.default.func,
  // 右边按钮点击事件
  marqueeProps: _propTypes.default.shape(MarqueeProps),
  style: _types.StyleProps
};
exports.NoticeBarPropTypes = NoticeBarPropTypes;
var NoticeBarDefaultPropTypes = {
  mode: 'closable',
  // 右边icon类型， closeable 表示关闭按钮  link 表示箭头
  onClick: function onClick() {
    return false;
  },
  // 右边按钮点击事件
  marqueeProps: MarqueeDefaultProps,
  style: {}
};
exports.NoticeBarDefaultPropTypes = NoticeBarDefaultPropTypes;