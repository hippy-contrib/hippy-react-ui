"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Toast = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _reactDom = require("react-dom");

var _Text = _interopRequireDefault(require("../Text"));

var _props = require("./props");

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

var styles = _react2.StyleSheet.create({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  bodyContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(58, 58, 58, 0.9)',
    padding: 8,
    borderRadius: 8,
    transform: [{
      translateY: -50
    }]
  }
});

var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    var _this;

    _classCallCheck(this, Toast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
    _this.state = {
      open: false
    };
    _this.handleBodyClick = _this.handleBodyClick.bind(_assertThisInitialized(_this));
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.visible && this.startTiming();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      !prevProps.visible && this.props.visible && this.startTiming();
    }
  }, {
    key: "createNode",
    value: function createNode() {
      var doc = window.document;
      this.node = doc.createElement('div');
      doc.body.appendChild(this.node);
      return this.node;
    }
  }, {
    key: "startTiming",
    value: function startTiming() {
      this.timeout && clearTimeout(this.timeout);
      var _this$props = this.props,
          duration = _this$props.duration,
          onClose = _this$props.onClose;
      this.timeout = setTimeout(function () {
        onClose();
      }, duration);
    }
  }, {
    key: "handleMaskClick",
    value: function handleMaskClick(event) {
      var _this$props2 = this.props,
          allowClose = _this$props2.allowClose,
          onClose = _this$props2.onClose;
      allowClose && onClose();
      console.log('handleMaskClick', allowClose);
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(event) {
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          onLayout = _this$props3.onLayout,
          style = _this$props3.style,
          titleStyle = _this$props3.titleStyle;
      var isElement = (Array.isArray(children) ? children : [children]).every(function (item) {
        return typeof item === 'string' || typeof item === 'number';
      });
      return _react.default.createElement(_react2.View, {
        style: styles.container,
        onLayout: onLayout,
        onClick: this.handleMaskClick
      }, _react.default.createElement(_react2.View, {
        style: [styles.bodyContainer, style],
        onClick: this.handleBodyClick
      }, isElement ? _react.default.createElement(_Text.default, {
        style: titleStyle,
        color: "#ffffff"
      }, children) : this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.visible;
      if (!visible) return null;
      this.startTiming();
      this.createNode();
      return (0, _reactDom.createPortal)(this.renderBody(), //塞进传送门的JSX
      this.node //传送门的另一端DOM node
      );
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.removeChild(this.node);
      this.timeout && clearTimeout(this.timeout);
    }
  }]);

  return Toast;
}(_react.default.Component);

exports.Toast = Toast;
Toast.propTypes = _props.toastPropTypes;
Toast.defaultProps = _props.toastDefaultProps;
var _default = Toast;
exports.default = _default;