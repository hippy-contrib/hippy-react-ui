"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLOR = exports.tabsProps = exports.titleProps = exports.tabPageProps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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