"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NoticeBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _Text = _interopRequireDefault(require("../Text"));

var _fontSize = require("../../utils/fontSize");

var _event = require("../../utils/event");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = _react2.StyleSheet.create({
  container: {
    // backgroundColor: '#fefcec',
    // height: 34,
    // lineHeight: 34,
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'relative',
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between' // display: 'flex',

  },
  item: {
    color: '#888888',
    marginHorizontal: 2
  },
  selectedItem: {
    color: '#ffb400' // backgroundColor: 'red'

  }
});

var NoticeBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoticeBar, _React$Component);

  function NoticeBar(props) {
    var _this;

    _classCallCheck(this, NoticeBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoticeBar).call(this, props));
    var maxValue = props.maxValue,
        defaultValue = props.defaultValue;
    var length = Math.max(maxValue | 0, 1);
    _this.state = {
      length: length,
      value: _this.getValue(defaultValue, length)
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NoticeBar, [{
    key: "getValue",
    value: function getValue(value) {
      var maxValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.length;
      return Math.max(0, Math.min(maxValue, value | 0));
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event, value) {
      if (value !== this.state.value) this.props.onChange(value);
      this.setState({
        value: value
      });
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "renderItem",
    value: function renderItem(index) {
      var _this2 = this;

      var _this$props = this.props,
          fontItem = _this$props.fontItem,
          selectedFontItem = _this$props.selectedFontItem,
          size = _this$props.size,
          fontStyle = _this$props.fontStyle,
          selectedFontStyle = _this$props.selectedFontStyle;
      var value = this.state.value;
      var isSelected = index < value;
      return _react.default.createElement(_Text.default, {
        key: "rate_".concat(index),
        size: (0, _fontSize.getFontSize)(size),
        onClick: function onClick(event) {
          return _this2.handleOnClick(event, index + 1);
        },
        style: [styles.item, (0, _utils.flattenStyle)(fontStyle), isSelected ? _objectSpread({}, styles.selectedItem, {}, (0, _utils.flattenStyle)(selectedFontStyle)) : {}]
      }, isSelected ? selectedFontItem : fontItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var length = this.state.length;
      var style = this.props.style;
      return _react.default.createElement(_react2.View, {
        style: [styles.container, style]
      }, Array.from(Array(length)).map(function (item, index) {
        return _this3.renderItem(index);
      }));
    }
  }]);

  return NoticeBar;
}(_react.default.Component);

exports.NoticeBar = NoticeBar;
NoticeBar.propTypes = _props.Props;
NoticeBar.defaultProps = _props.DefaultProps;
var _default = NoticeBar;
exports.default = _default;