"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Confirm = exports.COLOR = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _Modal = _interopRequireDefault(require("./Modal"));

var _Button = _interopRequireDefault(require("../Button"));

var _Divider = _interopRequireWildcard(require("../Divider"));

var _event = require("../../utils/event");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
exports.COLOR = COLOR;

var styles = _react2.StyleSheet.create({
  container: {
    transform: [{
      translateY: -50
    }],
    borderColor: '#dddddd',
    borderWidth: _utils.hairlineWidth,
    backgroundColor: '#ffffff',
    width: 270,
    paddingTop: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#888888'
  },
  footer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center'
  }
});

var Confirm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Confirm, _React$Component);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, _getPrototypeOf(Confirm).apply(this, arguments));
  }

  _createClass(Confirm, [{
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props = this.props,
          footer = _this$props.footer,
          cancelText = _this$props.cancelText,
          okText = _this$props.okText,
          onCancel = _this$props.onCancel,
          onOk = _this$props.onOk;
      if (footer) return footer;
      return _react.default.createElement(_react2.View, {
        style: styles.footer
      }, _react.default.createElement(_Button.default, {
        type: "ghost",
        style: {
          flex: 1,
          borderWidth: 0,
          borderRadius: 0
        },
        onClick: onCancel
      }, cancelText), _react.default.createElement(_Divider.VerticalDivider, null), _react.default.createElement(_Button.default, {
        type: "ghost",
        style: {
          flex: 1,
          borderWidth: 0,
          borderRadius: 0
        },
        onClick: onOk
      }, okText));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          title = _this$props2.title,
          footer = _this$props2.footer,
          otherProps = _objectWithoutProperties(_this$props2, ["children", "title", "footer"]);

      return _react.default.createElement(_Modal.default, otherProps, _react.default.createElement(_react2.View, {
        style: [styles.container],
        onClick: _event.stopPropagation
      }, _react.default.createElement(_react2.View, {
        style: styles.header,
        onClick: _event.stopPropagation
      }, title), _react.default.createElement(_react2.View, {
        style: styles.body,
        onClick: _event.stopPropagation
      }, children), _react.default.createElement(_Divider.default, {
        color: '#dddddd'
      }), this.renderFooter()));
    }
  }]);

  return Confirm;
}(_react.default.Component);

exports.Confirm = Confirm;
var _default = Confirm;
exports.default = _default;