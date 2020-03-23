"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _rodal = _interopRequireDefault(require("rodal"));

var _react2 = require("@hippy/react");

var _utils = require("../../utils");

var _props = require("./props");

var _styles = require("./styles");

var _event = require("../../utils/event");

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

// 根据平台动态加载，否则在hippy里面直接引入css文件，会报错
// TODO 做成配置，webpack配置，或者统一入口
if (_utils.ISWEB) require('rodal/lib/rodal.css');
var animationTypeMap = {
  slide: 'slideUp',
  fade: 'fade'
};
/**
 * click mask 通过onClose来执行，有一定风险，rodal监听到键盘也会调用onclose
 */

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "handleMaskClick",
    value: function handleMaskClick(event) {
      var onMaskClick = this.props.onMaskClick;
      onMaskClick(event);
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible,
          transparent = _this$props.transparent,
          animated = _this$props.animated,
          animation = _this$props.animation,
          maskStyle = _this$props.maskStyle,
          style = _this$props.style;
      return (
        /*#__PURE__*/
        _react.default.createElement(_rodal.default, {
          visible: visible,
          width: 100,
          height: 100,
          measure: '%',
          customStyles: {
            backgroundColor: 'transparent',
            padding: 0,
            justifyContent: 'center',
            alignItems: 'center'
          },
          showMask: false,
          customMaskStyles: _styles.styles.mask,
          showCloseButton: false,
          duration: animated ? 300 : 0,
          closeMaskOnClick: false,
          animation: animationTypeMap[animation] || 'fade',
          onClose: function onClose() {}
        },
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: [_styles.styles.mask, transparent ? {
            backgroundColor: 'transparent'
          } : {}, maskStyle, style],
          onClick: this.handleMaskClick
        }, children))
      );
    }
  }]);

  return Modal;
}(_react.default.Component);

exports.Modal = Modal;
Modal.propTypes = _props.modalPropTypes;
Modal.defaultProps = _props.modalDefaultProps;
var _default = Modal;
exports.default = _default;