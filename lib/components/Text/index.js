"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _event = require("../../types/event");

var _types = require("../../types");

var _fontSize = require("../../utils/fontSize");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * 解决react-web中Text的嵌套问题
 * 当父节点有Text组件时，使用的是span标签，不换行
 * 否则使用的div标签，换行
 */
var TextContext = _react.default.createContext({
  isInAParentText: false,
  textDepth: 0,
  parentStyle: {}
}); // hippy-react-web 中 Text组件使用了getChildContext，却没有声明childContextTypes


if (_utils.ISWEB) {
  _react2.Text.childContextTypes = {
    isInAParentText: _propTypes.default.bool
  };
  _react2.Text.contextType = TextContext;
}

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: "getStyle",
    value: function getStyle() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var size = props.size,
          height = props.height,
          opacity = props.opacity,
          lineHeight = props.lineHeight,
          color = props.color;
      var style = {
        isInAParentText: true
      };
      size && (style = _objectSpread({}, style, {
        fontSize: _fontSize.fontSizesMap[size] || size || _fontSize.fontSizesMap['sm']
      }));
      height && (style = _objectSpread({}, style, {
        height: height
      }));
      lineHeight && (style = _objectSpread({}, style, {
        lineHeight: lineHeight
      }));
      color && (style = _objectSpread({}, style, {
        color: color
      }));
      opacity && (style = _objectSpread({}, style, {
        opacity: opacity
      }));
      return style;
    }
    /**
     * 解决text嵌套问题
     * 如果子节点不是数组，且不是组件，则直接渲染
     * 如果子节点是组件，则直接渲染
     * 如果子节点是数组，则遍历每个节点
     * 	若是组件，直接渲染
     * 	否认递归使用Text组件
     * 		样式进行传递
     */

  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props,
          children = _this$props.children,
          otherProps = _objectWithoutProperties(_this$props, ["children"]);

      if (!Array.isArray(children)) return children;
      return children.map(function (child, index) {
        if (_react.default.isValidElement(child)) {
          return _react.default.createElement(child.type, _extends({
            key: "".concat(child.type, "_").concat(index)
          }, child.props));
        } else {
          return _react.default.createElement(Text, _extends({
            key: "".concat(child.type, "_").concat(index)
          }, otherProps), child);
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Text componentDidMount');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onLayout = _this$props2.onLayout,
          onClick = _this$props2.onClick,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          _this$props2$opacity = _this$props2.opacity,
          opacity = _this$props2$opacity === void 0 ? 1 : _this$props2$opacity,
          numberOfLines = _this$props2.numberOfLines,
          _this$props2$ellipsiz = _this$props2.ellipsizeMode,
          ellipsizeMode = _this$props2$ellipsiz === void 0 ? 'head' : _this$props2$ellipsiz;
      var _this$context = this.context,
          textDepth = _this$context.textDepth,
          parentStyle = _this$context.parentStyle;
      var customStyle = !Array.isArray(style) ? [style] : style;
      var pStyle = Array.isArray(parentStyle) ? parentStyle : [parentStyle];
      customStyle = [].concat(_toConsumableArray(pStyle), [this.getStyle()], _toConsumableArray(customStyle));
      return _react.default.createElement(TextContext.Provider, {
        value: {
          textDepth: textDepth + 1,
          isInAParentText: textDepth > 0,
          parentStyle: customStyle
        }
      }, _react.default.createElement(_react2.Text, {
        onLayout: onLayout,
        onClick: onClick,
        opacity: opacity,
        style: customStyle,
        numberOfLines: numberOfLines,
        ellipsizeMode: ellipsizeMode
      }, this.renderChildren()));
    }
  }]);

  return Text;
}(_react.default.Component);

exports.Text = Text;
Text.contextType = TextContext;
Text.propTypes = _objectSpread({}, _event.LayoutableProps, {}, _event.ClickableProps, {
  ellipsizeMode: _propTypes.default.oneOf(_types.ellipsizeMode),
  numberOfLines: _propTypes.default.number,
  height: _propTypes.default.number,
  lineHeight: _propTypes.default.number,
  size: _propTypes.default.oneOfType([_propTypes.default.oneOf(_fontSize.fontSizes), _propTypes.default.number]),
  opacity: _propTypes.default.number,
  style: _types.StyleProps,
  color: _propTypes.default.string // children: PropTypes.any,

});
/**
 * 去除默认的props，用于嵌套使用组件
 */

Text.defaultProps = _objectSpread({}, _event.DefaultLayoutableProps, {}, _event.DefaultClickableProps);
var _default = Text;
exports.default = _default;