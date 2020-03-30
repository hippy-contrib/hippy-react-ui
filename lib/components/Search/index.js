"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Search = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _Input = _interopRequireDefault(require("../Input"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Button = _interopRequireDefault(require("../Button"));

var _props = require("./props");

var _event = require("../../utils/event");

var _iosSearch = _interopRequireDefault(require("../../../assets/ios-search.png"));

var _cancel = _interopRequireDefault(require("../../../assets/cancel.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
    backgroundColor: '#dddddd',
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    height: 28,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    overflow: 'hidden'
  },
  searchIcon: {
    backgroundColor: 'transparent',
    height: 18,
    width: 18
  },
  cancelIconContainer: {
    padding: 4,
    backgroundColor: '#bbbbbb',
    marginRight: 4
  },
  cancelIcon: {
    backgroundColor: '#bbbbbb',
    height: 12,
    width: 12
  },
  input: {
    flex: 1,
    marginLeft: 4,
    // backgroundColor: 'red',
    minHeight: 28
  },
  rightButton: {
    backgroundColor: '#dddddd'
  }
});

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.handleOnCancelClick = _this.handleOnCancelClick.bind(_assertThisInitialized(_this));
    _this.handleOnClearClick = _this.handleOnClearClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "handleOnClearClick",
    value: function handleOnClearClick(event) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onClear = _this$props.onClear;
      console.log('handleOnClearClick', event);
      onChange('');
      onClear(event);
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "handleOnCancelClick",
    value: function handleOnCancelClick(event) {
      this.props.onCancel(event);
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "getStyle",
    value: function getStyle() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          defaultValue = _this$props2.defaultValue,
          disabled = _this$props2.disabled,
          onChange = _this$props2.onChange,
          maxLength = _this$props2.maxLength,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onSubmit = _this$props2.onSubmit,
          placeholder = _this$props2.placeholder,
          cancelText = _this$props2.cancelText,
          showCancelButton = _this$props2.showCancelButton;
      return _react.default.createElement(_react2.View, {
        style: styles.container
      }, _react.default.createElement(_react2.View, {
        style: styles.body
      }, _react.default.createElement(_Icon.default, {
        iconStyle: styles.searchIcon,
        source: _iosSearch.default
      }), _react.default.createElement(_Input.default, {
        value: value,
        placeholder: placeholder,
        style: styles.input,
        editable: !disabled,
        defaultValue: defaultValue,
        onChange: onChange,
        maxLength: maxLength,
        onFocus: onFocus,
        onBlur: onBlur,
        onEndEditing: onSubmit
      }), value && _react.default.createElement(_Icon.default, {
        size: "xxs",
        source: _cancel.default,
        containerStyle: styles.cancelIconContainer,
        iconStyle: styles.cancelIcon,
        onClick: this.handleOnClearClick
      })), showCancelButton && _react.default.createElement(_Button.default, {
        size: "small",
        type: "ghost",
        style: styles.rightButton,
        onClick: this.handleOnCancelClick
      }, cancelText));
    }
  }]);

  return Search;
}(_react.default.Component);

exports.Search = Search;
Search.propTypes = _props.SearchProps;
Search.defaultProps = _props.SearchDefaultProps;
var _default = Search;
exports.default = _default;