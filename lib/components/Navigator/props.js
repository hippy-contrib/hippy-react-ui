"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigatorDefaultProps = exports.NavigatorPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigatorPropTypes = {
  containerStyle: _types.StyleProps,
  titleTextStyle: _types.StyleProps,
  titleStyle: _types.StyleProps,
  title: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  leftContent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  // 如果是back类型，显示返回箭头
  rightContent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  onLeftClick: _propTypes.default.func,
  // 点击返回按钮触发事件
  transparent: _propTypes.default.bool,
  // 是否透明
  back: _propTypes.default.bool // 是否显示返回，优先级高于left

};
exports.NavigatorPropTypes = NavigatorPropTypes;
var NavigatorDefaultProps = {
  containerStyle: {},
  titleStyle: {},
  titleTextStyle: {},
  transparent: false,
  title: '',
  leftContent: '',
  rightContent: '',
  back: false,
  onLeftClick: function onLeftClick() {}
};
exports.NavigatorDefaultProps = NavigatorDefaultProps;