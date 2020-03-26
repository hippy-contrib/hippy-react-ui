"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _Button = _interopRequireDefault(require("../Button"));

var _Text = _interopRequireDefault(require("../Text"));

var _utils = require("../../utils");

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = _react2.StyleSheet.create({
  container: {
    height: 42,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: _utils.hairlineWidth,
    borderColor: '#cccccc',
    overflow: 'hidden'
  },
  button: {
    borderWidth: 0,
    height: 41,
    // borderBottomWidth: hairlineWidth,
    borderColor: '#cccccc'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    lineHeight: 42,
    height: 41.
  }
});

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          okText = _this$props.okText,
          dismissText = _this$props.dismissText,
          onOk = _this$props.onOk,
          onDismiss = _this$props.onDismiss,
          title = _this$props.title;
      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: styles.container
        },
        /*#__PURE__*/
        _react.default.createElement(_Button.default, {
          style: styles.button,
          onClick: onOk,
          type: "ghost"
        }, dismissText),
        /*#__PURE__*/
        _react.default.createElement(_Text.default, {
          size: "md",
          style: styles.title
        }, title),
        /*#__PURE__*/
        _react.default.createElement(_Button.default, {
          style: styles.button,
          onClick: onDismiss,
          type: "ghost"
        }, okText))
      );
    }
  }]);

  return Header;
}(_react.default.Component);

exports.Header = Header;
Header.propTypes = _props.HeaderPropTypes;
Header.defaultProps = _props.HeaderDefaultProps;
var _default = Header;
exports.default = _default;