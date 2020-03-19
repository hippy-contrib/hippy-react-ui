import _toConsumableArray from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * 级联选择器
 */
import React from 'react';
import { View } from '@hippy/react';
import { CascaderPickerPropTypes, CascaderPickerDefaultProps } from './props';
import SinglePicker from './SinglePicker';
import { isDef } from '../../utils';
export var CascaderPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CascaderPicker, _React$Component);

  _createClass(CascaderPicker, null, [{
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

          if (data && data.length) {
            value[i] = data[0].value;
            data = data[0].children;
          }
        }
      }

      return value;
    }
  }]);

  function CascaderPicker(props) {
    var _this;

    _classCallCheck(this, CascaderPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CascaderPicker).call(this, props));
    _this.state = {
      width: 0
    };
    return _this;
  }
  /**
   * @description 获取第n级基础数据，可以做个缓存优化
   * @param {Number} index 级别
   */


  _createClass(CascaderPicker, [{
    key: "getCol",
    value: function getCol(index) {
      var _this$props = this.props,
          value = _this$props.value,
          data = _this$props.data;
      if (index === 0) return data;
      var cur = data,
          curIndex;

      var _loop = function _loop(i) {
        curIndex = cur.findIndex(function (item) {
          return item.value === value[i];
        });
        if (curIndex === -1) return {
          v: []
        };
        cur = cur[curIndex].children || [];
      };

      for (var i = 0; i < index; ++i) {
        var _ret = _loop(i);

        if (typeof _ret === "object") return _ret.v;
      }

      return cur;
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(index, selectedValue) {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          cols = _this$props2.cols,
          data = _this$props2.data;

      var newValues = _toConsumableArray(value);

      if (newValues[index] === selectedValue) return; // 设置当前值

      newValues[index] = selectedValue; // 最后一个节点，直接返回数据

      if (index === cols - 1) return onChange(newValues); // 将后续节点的值重置

      for (var i = index + 1; i < cols; ++i) {
        newValues[i] = '';
      } // 找到后续节点的父节点


      var cur = data;

      var _loop2 = function _loop2(_i) {
        var selectedIndex = cur.findIndex(function (item) {
          return item.value === newValues[_i];
        });
        if (selectedIndex === -1) return {
          v: onChange(newValues)
        };
        cur = cur[selectedIndex].children || [];
      };

      for (var _i = 0; _i <= index; ++_i) {
        var _ret2 = _loop2(_i);

        if (typeof _ret2 === "object") return _ret2.v;
      } // 初始化后续节点的值


      for (var _i2 = index + 1; _i2 < cols; ++_i2) {
        if (cur && cur.length) {
          newValues[_i2] = cur[0].value;
          cur = cur[0].children || [];
        }
      }

      onChange(newValues);
    }
  }, {
    key: "renderSingle",
    value: function renderSingle(index) {
      var _this2 = this;

      var _this$props3 = this.props,
          value = _this$props3.value,
          cols = _this$props3.cols;
      var width = this.state.width;
      var nodes = this.getCol(index);
      var key = value.slice(0, index).join('_'); // 是否可以选择，出于非第一个，并且上一级的值为空，则不能编辑

      var disabled = index !== 0 && (isDef(value[index - 1]) || value[index - 1] === '');
      var style = width ? {
        width: width / cols
      } : {
        flex: 1
      };
      return React.createElement(SinglePicker, {
        key: "cascader_".concat(index, "_").concat(key),
        index: index,
        selectedValue: value[index],
        onValueChange: function onValueChange(selectedValue) {
          return _this2.handleOnChange(index, selectedValue);
        },
        style: style,
        disabled: disabled
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
      var _this3 = this;

      var cols = this.props.cols;
      return React.createElement(View, {
        style: {
          flexDirection: 'row'
        },
        onLayout: function onLayout(_ref) {
          var width = _ref.layout.width;
          return !_this3.state.width && _this3.setState({
            width: width
          });
        }
      }, Array.from(Array(cols)).map(function (item, index) {
        return _this3.renderSingle(index);
      }));
    }
  }]);

  return CascaderPicker;
}(React.Component);
CascaderPicker.defaultProps = CascaderPickerDefaultProps;
export default CascaderPicker;