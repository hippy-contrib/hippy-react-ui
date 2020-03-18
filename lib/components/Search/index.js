import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import Input from '../Input';
import Icon from '../Icon';
import Button from '../Button';
import { SearchProps, SearchDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';
import SearchIcon from '../../../assets/ios-search.png';
import CancelIcon from '../../../assets/cancel.png';
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    height: 28,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    overflow: 'hidden'
  },
  searchIcon: {
    backgroundColor: 'transparent',
    height: 18,
    width: 18
  },
  cancelIconContainer: {
    padding: 4,
    backgroundColor: '#bbbbbb',
    marginRight: 4
  },
  cancelIcon: {
    backgroundColor: '#bbbbbb',
    height: 12,
    width: 12
  },
  input: {
    flex: 1,
    marginLeft: 4,
    // backgroundColor: 'red',
    minHeight: 28
  },
  rightButton: {
    backgroundColor: '#dddddd'
  }
});
export var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.handleOnCancelClick = _this.handleOnCancelClick.bind(_assertThisInitialized(_this));
    _this.handleOnClearClick = _this.handleOnClearClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Search, [{
    key: "handleOnClearClick",
    value: function handleOnClearClick(event) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onClear = _this$props.onClear;
      console.log('handleOnClearClick', event);
      onChange('');
      onClear(event);
      return stopPropagation(event);
    }
  }, {
    key: "handleOnCancelClick",
    value: function handleOnCancelClick(event) {
      this.props.onCancel(event);
      return stopPropagation(event);
    }
  }, {
    key: "getStyle",
    value: function getStyle() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          defaultValue = _this$props2.defaultValue,
          disabled = _this$props2.disabled,
          onChange = _this$props2.onChange,
          maxLength = _this$props2.maxLength,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onSubmit = _this$props2.onSubmit,
          placeholder = _this$props2.placeholder,
          cancelText = _this$props2.cancelText,
          showCancelButton = _this$props2.showCancelButton;
      return React.createElement(View, {
        style: styles.container
      }, React.createElement(View, {
        style: styles.body
      }, React.createElement(Icon, {
        iconStyle: styles.searchIcon,
        source: SearchIcon
      }), React.createElement(Input, {
        value: value,
        placeholder: placeholder,
        style: styles.input,
        editable: !disabled,
        defaultValue: defaultValue,
        onChange: onChange,
        maxLength: maxLength,
        onFocus: onFocus,
        onBlur: onBlur,
        onEndEditing: onSubmit
      }), value && React.createElement(Icon, {
        size: "xxs",
        source: CancelIcon,
        containerStyle: styles.cancelIconContainer,
        iconStyle: styles.cancelIcon,
        onClick: this.handleOnClearClick
      })), showCancelButton && React.createElement(Button, {
        size: "small",
        type: "ghost",
        style: styles.rightButton,
        onClick: this.handleOnCancelClick
      }, cancelText));
    }
  }]);

  return Search;
}(React.Component);
Search.defaultProps = SearchDefaultProps;
export default Search;