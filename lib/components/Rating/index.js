import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import { Props, DefaultProps } from './props';
import Text from '../Text';
import { getFontSize } from '../../utils/fontSize';
import { stopPropagation } from '../../utils/event';
import { flattenStyle } from '../../utils';
var styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fefcec',
    // height: 34,
    // lineHeight: 34,
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'relative',
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between' // display: 'flex',

  },
  item: {
    color: '#888888',
    marginHorizontal: 2
  },
  selectedItem: {
    color: '#ffb400' // backgroundColor: 'red'

  }
});
export var NoticeBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NoticeBar, _React$Component);

  function NoticeBar(props) {
    var _this;

    _classCallCheck(this, NoticeBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoticeBar).call(this, props));
    var maxValue = props.maxValue,
        defaultValue = props.defaultValue;
    var length = Math.max(maxValue | 0, 1);
    _this.state = {
      length: length,
      value: _this.getValue(defaultValue, length)
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NoticeBar, [{
    key: "getValue",
    value: function getValue(value) {
      var maxValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.length;
      return Math.max(0, Math.min(maxValue, value | 0));
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event, value) {
      if (value !== this.state.value) this.props.onChange(value);
      this.setState({
        value: value
      });
      return stopPropagation(event);
    }
  }, {
    key: "renderItem",
    value: function renderItem(index) {
      var _this2 = this;

      var _this$props = this.props,
          fontItem = _this$props.fontItem,
          selectedFontItem = _this$props.selectedFontItem,
          size = _this$props.size,
          fontStyle = _this$props.fontStyle,
          selectedFontStyle = _this$props.selectedFontStyle;
      var value = this.state.value;
      var isSelected = index < value;
      return React.createElement(Text, {
        key: "rate_".concat(index),
        size: getFontSize(size),
        onClick: function onClick(event) {
          return _this2.handleOnClick(event, index + 1);
        },
        style: [styles.item, flattenStyle(fontStyle), isSelected ? _objectSpread({}, styles.selectedItem, {}, flattenStyle(selectedFontStyle)) : {}]
      }, isSelected ? selectedFontItem : fontItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var length = this.state.length;
      var style = this.props.style;
      return React.createElement(View, {
        style: [styles.container, style]
      }, Array.from(Array(length)).map(function (item, index) {
        return _this3.renderItem(index);
      }));
    }
  }]);

  return NoticeBar;
}(React.Component);
NoticeBar.defaultProps = DefaultProps;
export default NoticeBar;