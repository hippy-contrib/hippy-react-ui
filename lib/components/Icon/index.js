"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DefaultIconProps = exports.IconProps = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _image = require("../../types/image");

var _types = require("../../types");

var _iconSize = require("../../utils/iconSize");

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

var styles = _react2.StyleSheet.create({
  containerStyle: {
    height: _iconSize.iconSizesMap['xs'],
    width: _iconSize.iconSizesMap['xs'],
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  iconStyle: {
    height: _iconSize.iconSizesMap['xs'],
    width: _iconSize.iconSizesMap['xs'],
    backgroundColor: 'transparent'
  }
});

var Icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Icon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      onClick && !disabled && onClick(event);
    });

    return _this;
  }

  _createClass(Icon, [{
    key: "getIconSize",
    value: function getIconSize() {
      var size = this.props.size;
      var iconSize = _iconSize.iconSizesMap[size] || size;
      return iconSize;
    }
    /**
     * 计算container和Icon的style
     * 如果设置了size，则设置container的宽和高
     * style优先级
     * containerStyle > size > defaultContainerStyle
     */

  }, {
    key: "mergeStyle",
    value: function mergeStyle(style) {
      var rounded = this.props.rounded;
      var iconSize = this.getIconSize();
      if (!iconSize) return style;
      return _objectSpread({
        height: iconSize,
        width: iconSize,
        borderRadius: rounded ? Math.round(iconSize / 2) : 0
      }, style);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          source = _this$props2.source,
          disabled = _this$props2.disabled,
          _this$props2$containe = _this$props2.containerStyle,
          containerStyle = _this$props2$containe === void 0 ? {} : _this$props2$containe,
          _this$props2$disabled = _this$props2.disabledStyle,
          disabledStyle = _this$props2$disabled === void 0 ? {} : _this$props2$disabled,
          _this$props2$iconStyl = _this$props2.iconStyle,
          iconStyle = _this$props2$iconStyl === void 0 ? {} : _this$props2$iconStyl,
          resizeMode = _this$props2.resizeMode,
          onLayout = _this$props2.onLayout,
          onLoad = _this$props2.onLoad,
          onLoadStart = _this$props2.onLoadStart,
          onLoadEnd = _this$props2.onLoadEnd,
          onError = _this$props2.onError,
          onProgress = _this$props2.onProgress,
          style = _this$props2.style;
      var statusStyle = disabled ? disabledStyle : {};
      return (
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: [styles.containerStyle, this.mergeStyle(containerStyle), statusStyle],
          onClick: this.handleClick
        },
        /*#__PURE__*/
        _react.default.createElement(_react2.Image, {
          style: [styles.iconStyle, this.mergeStyle(iconStyle), statusStyle, {
            resizeMode: resizeMode
          }, style],
          source: {
            uri: source && source.default ? source.default : source
          },
          onLayout: onLayout,
          onLoad: onLoad,
          onLoadStart: onLoadStart,
          onLoadEnd: onLoadEnd,
          onError: onError,
          onProgress: onProgress
        }))
      );
    }
  }]);

  return Icon;
}(_react.default.Component);

exports.Icon = Icon;

var IconProps = _objectSpread({
  size: _propTypes.default.oneOfType([_propTypes.default.oneOf(_iconSize.iconSizes), _propTypes.default.number]),
  // icon尺寸
  containerStyle: _types.StyleProps,
  onClick: _propTypes.default.func,
  style: _types.StyleProps
}, _image.ImageProps);

exports.IconProps = IconProps;

var DefaultIconProps = _objectSpread({
  size: 'xs',
  containerStyle: {},
  onClick: function onClick() {}
}, _image.DefaultImageProps, {
  style: {}
});

exports.DefaultIconProps = DefaultIconProps;
Icon.propTypes = IconProps;
Icon.defaultProps = DefaultIconProps;
var _default = Icon;
exports.default = _default;