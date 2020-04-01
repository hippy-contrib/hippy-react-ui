"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsDefaultProps = exports.TabsPropTypes = exports.TabBarDefaultProps = exports.TabBarPropTypes = exports.TabBarItemDefaultProps = exports.TabBarItemPropTypes = exports.COLOR = exports.tabsProps = exports.titleProps = exports.tabPageProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _event = require("../../types/event");

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabPageProps = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]);

exports.tabPageProps = tabPageProps;

var titleProps = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.element]);

exports.titleProps = titleProps;

var tabsProps = _propTypes.default.arrayOf(_propTypes.default.shape({
  key: tabPageProps,
  title: titleProps
}));

exports.tabsProps = tabsProps;
var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
exports.COLOR = COLOR;

var TabBarItemPropTypes = _objectSpread({}, _event.ClickableProps, {}, _event.LayoutableProps, {
  color: _propTypes.default.string,
  title: titleProps,
  selected: _propTypes.default.bool,
  style: _types.StyleProps
});

exports.TabBarItemPropTypes = TabBarItemPropTypes;

var TabBarItemDefaultProps = _objectSpread({}, _event.DefaultClickableProps, {}, _event.DefaultLayoutableProps, {
  title: '',
  color: COLOR.textColor,
  selected: false,
  style: {}
});

exports.TabBarItemDefaultProps = TabBarItemDefaultProps;

var TabBarPropTypes = _objectSpread({}, _event.ClickableProps, {
  tabs: tabsProps,
  tabBarPosition: _propTypes.default.oneOf(['top', 'bottom']),
  selected: tabPageProps,
  style: _types.StyleProps,
  showUnderLine: _propTypes.default.bool,
  color: _propTypes.default.string,
  // 默认颜色
  selectedColor: _propTypes.default.string,
  // 选中的颜色
  dividerColor: _propTypes.default.string,
  // 默认下划线颜色，选中下划线颜色跟selectedColor一致
  tabBarItemStyle: _types.StyleProps
});

exports.TabBarPropTypes = TabBarPropTypes;

var TabBarDefaultProps = _objectSpread({}, _event.DefaultClickableProps, {
  tabs: [],
  color: COLOR.textColor,
  selectedColor: COLOR.selectedTextColor,
  dividerColor: COLOR.divider,
  tabBarPosition: 'top',
  style: {},
  showUnderLine: true,
  tabBarItemStyle: {}
});

exports.TabBarDefaultProps = TabBarDefaultProps;
var TabsPropTypes = {
  tabs: tabsProps,
  tabBarPosition: _propTypes.default.oneOf(['top', 'bottom']),
  onChange: _propTypes.default.func,
  initialPage: tabPageProps,
  page: tabPageProps,
  // 选中
  swipeable: _propTypes.default.bool,
  // 是否支持滑动切换
  animated: _propTypes.default.bool,
  // 切换时是否展示动画
  onTabClick: _propTypes.default.func,
  // 点击tab事件
  destroyInactiveTab: _propTypes.default.bool,
  // 销毁超出范围Tab
  children: _propTypes.default.arrayOf(_propTypes.default.element),
  showUnderLine: _propTypes.default.bool,
  // tabbar是否展示选中下划线
  tabBarColor: _propTypes.default.string,
  // 默认颜色
  tabBarSelectedColor: _propTypes.default.string,
  // 选中的颜色
  tabBarDividerColor: _propTypes.default.string,
  // 默认下划线颜色，选中下划线颜色跟selectedColor一致
  tabBarItemStyle: _types.StyleProps,
  tabBarContainerStyle: _types.StyleProps
};
exports.TabsPropTypes = TabsPropTypes;
var TabsDefaultProps = {
  tabs: [],
  tabBarPosition: 'top',
  onChange: function onChange() {
    return false;
  },
  onTabClick: function onTabClick() {
    return false;
  },
  animated: true,
  // 至于在终端有效
  swipeable: true,
  showUnderLine: true,
  tabBarColor: COLOR.textColor,
  tabBarSelectedColor: COLOR.selectedTextColor,
  tabBarDividerColor: COLOR.divider,
  tabBarContainerStyle: {},
  tabBarItemStyle: {}
};
exports.TabsDefaultProps = TabsDefaultProps;