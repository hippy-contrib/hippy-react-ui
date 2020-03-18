import _defineProperty from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { TextInput, StyleSheet } from '@hippy/react';
import { stopPropagation } from '../../utils/event';
import { setStyle, removeStyle } from '../../utils/css';
import { TextareaPropTypes, TextareaDefaultPropTypes } from './props';
import { flattenStyle, ISWEB } from '../../utils';
import { fontSizesMap } from '../../utils/fontSize';
import WebTextArea from './Textarea.web'; // import './index.css';

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

if (ISWEB) {
  setStyle('hy-comp-textarea', {
    '[data-hy-comp-id=textarea]': "outline: none; -webkit-appearance: none;"
  });
}

export var getStyleId = function getStyleId(id) {
  return "hy-comp-textarea-style-".concat(id);
};
export var getInputId = function getInputId(id) {
  return "hy-comp-textarea-".concat(id);
};
var TextareaInput = ISWEB ? WebTextArea : TextInput;
var styles = StyleSheet.create({
  container: {
    minHeight: 100,
    // lineHeight: 44,
    display: 'flex',
    textAlign: 'left',
    color: '#333333',
    borderWidth: 0
  }
});
export var Textarea =
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
      return stopPropagation(event);
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
      setStyle(this.styleId, _defineProperty({}, key, "color: ".concat(color, ";")));
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
        fontSize: fontSizesMap[size] || size || fontSizesMap['xs']
      });
      var result = flattenStyle(styleList);
      result.lineHeight && (result['line-height'] = result.lineHeight);
      return result;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeStyle(this.styleId);
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
      return React.createElement(TextareaInput, {
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
}(React.Component);
Textarea.defaultProps = TextareaDefaultPropTypes;
export default Textarea;