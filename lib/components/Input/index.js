import _defineProperty from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { TextInput, StyleSheet } from '@hippy/react';
import { stopPropagation } from '../../utils/event';
import { setStyle, removeStyle } from '../../utils/css';
import { InputPropTypes, InputDefaultPropTypes } from './props';
import { flattenStyle, ISWEB } from '../../utils';
import { fontSizesMap } from '../../utils/fontSize';
import WebInput from './Input.web';
var InputComp = ISWEB ? WebInput : TextInput; // import './index.css';

/**
 * hippy 当前版本需要给定width和height，否则会crash
 * hippy-react-web placeholderTextColor不生效
 * hippy-react value 不起作用，只有在初始化的时候有作用
 * hippy-react style 中 padding 不起作用
 * hippy-react style 中 fontWeight 是小数
 */
// 禁止web input 默认样式

if (ISWEB) {
  setStyle('hy-comp-input', {
    '[data-hy-comp-id=input]': "outline: none; -webkit-appearance: none;"
  });
}

export var getStyleId = function getStyleId(id) {
  return "hy-comp-input-style-".concat(id);
};
export var getInputId = function getInputId(id) {
  return "hy-comp-input-".concat(id);
};
var styles = StyleSheet.create({
  container: {
    minHeight: 32,
    display: 'flex',
    fontSize: 14,
    textAlign: 'left',
    color: '#333333',
    borderWidth: 0
  }
});
export var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  _createClass(Input, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.hasOwnProperty('value') && nextProps.value !== prevState.value) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    _this.handleOnEndEditing = _this.handleOnEndEditing.bind(_assertThisInitialized(_this));
    var defaultValue = props.defaultValue,
        value = props.value;
    _this.state = {
      value: defaultValue || value || ''
    };
    var placeholderTextColor = props.placeholderTextColor;
    _this.styleId = getStyleId("".concat(Math.random()).replace(/^0\./, ''));
    _this.inputId = getInputId("".concat(Math.random()).replace(/^0\./, ''));

    _this.setWebPlaceholderColor(placeholderTextColor);

    return _this;
  }

  _createClass(Input, [{
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
    key: "handleOnEndEditing",
    value: function handleOnEndEditing(event) {
      if (event.key === 'enter' || event.key === 'Enter') {
        // console.log('dddddd', this, this.inputRef.getWrappedInstance);
        console.log('dddddd', this.inputRef);
        this.inputRef && this.inputRef.blur();
        this.props.onEndEditing(event);
      }
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
      return flattenStyle(styleList);
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
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      // hippy 动态设置value的值，用于兼容外部直接设置value
      this.inputRef && this.inputRef.setValue && this.inputRef.setValue(this.state.value || '');
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
          maxLength = _this$props2.maxLength,
          onFocus = _this$props2.onFocus;
      var value = this.state.value;
      console.log('render', this.inputRef);
      return React.createElement(InputComp, {
        "data-hy-comp-id": "input",
        ref: function ref(_ref) {
          return _this2.inputRef = _ref;
        },
        id: this.inputId,
        multiline: false,
        numberOfLines: 1,
        maxLength: maxLength,
        style: this.getStyle(),
        autoFocus: autoFocus,
        onFocus: onFocus,
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
        contentInset: 0,
        onKeyPress: this.handleOnEndEditing,
        value: value
      });
    }
  }]);

  return Input;
}(React.Component);
Input.defaultProps = InputDefaultPropTypes;
export default Input;