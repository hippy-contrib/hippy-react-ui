"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CascaderPicker = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _SinglePicker = _interopRequireDefault(require("./SinglePicker"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CascaderPicker =
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

        if (_typeof(_ret) === "object") return _ret.v;
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

        if (_typeof(_ret2) === "object") return _ret2.v;
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

      var disabled = index !== 0 && ((0, _utils.isDef)(value[index - 1]) || value[index - 1] === '');
      var style = width ? {
        width: width / cols
      } : {
        flex: 1
      };
      return _react.default.createElement(_SinglePicker.default, {
        key: "cascader_".concat(index, "_").concat(key),
        index: index,
        selectedValue: value[index],
        onValueChange: function onValueChange(selectedValue) {
          return _this2.handleOnChange(index, selectedValue);
        },
        style: style,
        disabled: disabled
      }, nodes.map(function (node) {
        return _react.default.createElement(_SinglePicker.default.Item, {
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
      return _react.default.createElement(_react2.View, {
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
}(_react.default.Component);

exports.CascaderPicker = CascaderPicker;
CascaderPicker.propTypes = _props.CascaderPickerPropTypes;
CascaderPicker.defaultProps = _props.CascaderPickerDefaultProps;
var _default = CascaderPicker;
exports.default = _default;