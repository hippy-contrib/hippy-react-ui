import _toConsumableArray from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * 双picker，两个picker数据相互独立
 */
import React from 'react';
import { View } from '@hippy/react';
import { MultiPickerPropTypes, MultiPickerDefaultProps } from './props';
import SinglePicker from './SinglePicker';
export var MultiPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiPicker, _React$Component);

  function MultiPicker() {
    _classCallCheck(this, MultiPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(MultiPicker).apply(this, arguments));
  }

  _createClass(MultiPicker, [{
    key: "handleOnChange",
    value: function handleOnChange(index, selectedValue) {
      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;
      if (value[index] === selectedValue) return;

      var newValues = _toConsumableArray(value);

      newValues[index] = selectedValue;
      onChange(newValues);
    }
  }, {
    key: "renderSingle",
    value: function renderSingle(index) {
      var _this = this;

      var _this$props2 = this.props,
          value = _this$props2.value,
          data = _this$props2.data;
      var nodes = data[index] || [];
      return React.createElement(SinglePicker, {
        key: "multi_".concat(index),
        selectedValue: value[index],
        onValueChange: function onValueChange(selectedValue) {
          return _this.handleOnChange(index, selectedValue);
        },
        style: {
          flex: 1
        }
      }, nodes.map(function (node) {
        return React.createElement(SinglePicker.Item, {
          key: node.value,
          value: node.value,
          label: node.label
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var cols = this.props.cols;
      return React.createElement(View, {
        style: {
          flexDirection: 'row'
        }
      }, Array.from(Array(cols)).map(function (item, index) {
        return _this2.renderSingle(index);
      }));
    }
  }], [{
    key: "initValues",

    /**
     * @description 根据参数和props生成默认选中的value值
     * @param {Object} data 数据
     * @param {Array} value 当前值
     */
    value: function initValues(data, value, cols) {
      // let data = d || this.props.data;
      // let value = val || this.props.value || this.props.defaultValue;
      if (!value || !value.length || value.indexOf(undefined) > -1) {
        value = [];

        for (var i = 0; i < cols; i++) {
          value[i] = '';

          if (data && data.length && data[i] && data[i].length) {
            value[i] = data[i][0].value;
          }
        }
      }

      return value;
    }
  }]);

  return MultiPicker;
}(React.Component);
MultiPicker.defaultProps = MultiPickerDefaultProps;
export default MultiPicker;