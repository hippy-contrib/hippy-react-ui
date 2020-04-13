"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = exports.COLOR = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _types = require("../../types");

var _event = require("../../utils/event");

var _fontSize = require("../../utils/fontSize");

var _Text = _interopRequireDefault(require("../Text"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
exports.COLOR = COLOR;

var styles = _react2.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 4
  },
  primaryContainer: {
    color: '#fff',
    backgroundColor: '#108ee9'
  },
  primaryText: {
    color: '#fff'
  },
  ghostContainer: {
    backgroundColor: '#fff',
    color: '#108ee9',
    borderWidth: _utils.hairlineWidth,
    borderColor: '#dddddd'
  },
  ghostText: {
    color: '#108ee9'
  },
  activating: {
    opacity: 0.7
  },
  disabled: {
    opacity: 0.6
  },
  large: {
    fontSize: _fontSize.fontSizesMap['md']
  },
  small: {
    height: 30,
    fontSize: _fontSize.fontSizesMap['xs']
  }
});

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      !disabled && onClick(event);
      return (0, _event.stopPropagation)(event);
    });

    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.state = {
      isActive: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          disabled = _this$props2.disabled,
          size = _this$props2.size,
          activeStyle = _this$props2.activeStyle,
          type = _this$props2.type;
      var isActive = this.state.isActive;
      var large = styles.large,
          small = styles.small,
          activating = styles.activating;
      var containerStyle = [styles.container, size === 'small' ? small : large, styles["".concat(type, "Container")] || styles['primaryContainer'], (0, _utils.flattenStyle)(style)];
      disabled && containerStyle.push(styles.disabled);
      isActive && containerStyle.push(activating, activeStyle);
      return containerStyle;
    }
  }, {
    key: "setStatus",
    value: function setStatus(isActive) {
      var disabled = this.props.disabled;
      !disabled && this.setState({
        isActive: isActive
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          children = _this$props3.children,
          type = _this$props3.type,
          size = _this$props3.size,
          titleStyle = _this$props3.titleStyle;

      if (_react.default.isValidElement(children || title)) {
        return children || title;
      }

      return _react.default.createElement(_Text.default, {
        style: [styles["".concat(type, "Text")] || styles['primaryText'], titleStyle],
        size: size === 'large' ? 'md' : 'xs'
      }, children || title);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_react2.View, {
        onClick: this.handleClick,
        style: this.getStyle(),
        onTouchDown: function onTouchDown() {
          return _this2.setStatus(true);
        },
        onTouchStart: function onTouchStart() {
          return _this2.setStatus(true);
        },
        onTouchEnd: function onTouchEnd() {
          return _this2.setStatus(false);
        }
      }, this.renderChildren());
    }
  }]);

  return Button;
}(_react.default.Component);

exports.Button = Button;
Button.propTypes = _objectSpread({}, _types.LayoutableProps, {}, _types.ClickableProps, {
  disabled: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['primary', 'ghost']),
  size: _propTypes.default.oneOf(['small', 'large']),
  activeStyle: _types.StyleProps,
  titleStyle: _types.StyleProps,
  // 文字样式，作用在text的
  style: _types.StyleProps,
  title: _types.ChildrenProps
});
Button.defaultProps = _objectSpread({}, _types.DefaultClickableProps, {}, _types.DefaultLayoutableProps, {
  disabled: false,
  type: 'primary',
  size: 'large',
  activeStyle: {},
  titleStyle: {},
  style: {},
  title: ''
});
var _default = Button;
exports.default = _default;