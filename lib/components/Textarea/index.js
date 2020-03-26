"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Textarea = exports.getInputId = exports.getStyleId = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _event = require("../../utils/event");

var _css = require("../../utils/css");

var _props = require("./props");

var _utils = require("../../utils");

var _fontSize = require("../../utils/fontSize");

var _Textarea = _interopRequireDefault(require("./Textarea.web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import './index.css';

/**
 * hippy 当前版本需要给定width和height，否则会crash
 * hippy-react-web
 * 	placeholderTextColor不生效
 * 	lineheight 需要用'23px',因为stylesheet没有做转换
 * 
 * line-height 不奏效
 * web中rows会自动撑开高度
 * hippy-react numberOfLines > 1是，returntype 不奏效
 * 所以做好设置textarea的高度，避免双端不一致
 * hippy-react numberOfLines不会自动撑开高度
 * 
 * 多行时，使用setValue会出现卡顿，因此摈弃props.value来设置input的值
 */
// 禁止web input 默认样式
if (_utils.ISWEB) {
  (0, _css.setStyle)('hy-comp-textarea', {
    '[data-hy-comp-id=textarea]': "outline: none; -webkit-appearance: none;"
  });
}

var getStyleId = function getStyleId(id) {
  return "hy-comp-textarea-style-".concat(id);
};

exports.getStyleId = getStyleId;

var getInputId = function getInputId(id) {
  return "hy-comp-textarea-".concat(id);
};

exports.getInputId = getInputId;
var TextareaInput = _utils.ISWEB ? _Textarea.default : _react2.TextInput;

var styles = _react2.StyleSheet.create({
  container: {
    minHeight: 100,
    // lineHeight: 44,
    display: 'flex',
    textAlign: 'left',
    color: '#333333',
    borderWidth: 0
  }
});

var Textarea =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    var placeholderTextColor = props.placeholderTextColor;
    _this.styleId = getStyleId("".concat(Math.random()).replace(/^0\./, ''));
    _this.inputId = getInputId("".concat(Math.random()).replace(/^0\./, ''));

    _this.setWebPlaceholderColor(placeholderTextColor);

    return _this;
  }

  _createClass(Textarea, [{
    key: "handleClick",
    value: function handleClick(event) {
      return (0, _event.stopPropagation)(event);
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(value) {
      var onChange = this.props.onChange;
      onChange(value);
      this.setState({
        value: value
      });
    }
  }, {
    key: "setWebPlaceholderColor",
    value: function setWebPlaceholderColor(color) {
      var key = "#".concat(this.inputId, "::placeholder");
      (0, _css.setStyle)(this.styleId, _defineProperty({}, key, "color: ".concat(color, ";")));
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$props = this.props,
          placeholderTextColor = _this$props.placeholderTextColor,
          style = _this$props.style,
          size = _this$props.size;
      var styleList = [styles.container, style];
      styleList.push({
        placeholderTextColor: placeholderTextColor,
        fontSize: _fontSize.fontSizesMap[size] || size || _fontSize.fontSizesMap['xs']
      });
      var result = (0, _utils.flattenStyle)(styleList);
      result.lineHeight && (result['line-height'] = result.lineHeight);
      return result;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _css.removeStyle)(this.styleId);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var placeholderTextColor = this.props.placeholderTextColor;

      if (placeholderTextColor !== nextProps.placeholderTextColor) {
        this.setWebPlaceholderColor(nextProps.placeholderTextColor);
      }

      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {// hippy 动态设置value的值，用于兼容外部直接设置value
      // this.inputRef && this.inputRef.setValue &&  this.inputRef.setValue(this.state.value || '');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          keyboardType = _this$props2.keyboardType,
          returnKeyType = _this$props2.returnKeyType,
          onBlur = _this$props2.onBlur,
          autoFocus = _this$props2.autoFocus,
          editable = _this$props2.editable,
          placeholder = _this$props2.placeholder,
          onKeyboardWillShow = _this$props2.onKeyboardWillShow,
          onSelectionChange = _this$props2.onSelectionChange,
          numberOfLines = _this$props2.numberOfLines,
          defaultValue = _this$props2.defaultValue,
          maxLength = _this$props2.maxLength;
      return _react.default.createElement(TextareaInput, {
        "data-hy-comp-id": "textarea",
        ref: function ref(_ref) {
          return _this2.inputRef = _ref;
        },
        id: this.inputId,
        defaultValue: defaultValue,
        multiline: true,
        numberOfLines: numberOfLines,
        rows: numberOfLines,
        maxLength: maxLength,
        style: this.getStyle(),
        autoFocus: autoFocus,
        placeholder: placeholder,
        editable: editable,
        readOnly: !editable,
        onChangeText: this.handleOnChange,
        keyboardType: keyboardType,
        onBlur: onBlur,
        onClick: this.handleClick,
        returnKeyType: returnKeyType,
        onKeyboardWillShow: onKeyboardWillShow,
        onSelectionChange: onSelectionChange,
        contentInset: 0 // value={value}

      });
    }
  }]);

  return Textarea;
}(_react.default.Component);

exports.Textarea = Textarea;
Textarea.propTypes = _props.TextareaPropTypes;
Textarea.defaultProps = _props.TextareaDefaultPropTypes;
var _default = Textarea;
exports.default = _default;