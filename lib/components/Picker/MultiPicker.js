"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MultiPicker = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _props = require("./props");

var _SinglePicker = _interopRequireDefault(require("./SinglePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MultiPicker =
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
      return _react.default.createElement(_SinglePicker.default, {
        key: "multi_".concat(index),
        selectedValue: value[index],
        onValueChange: function onValueChange(selectedValue) {
          return _this.handleOnChange(index, selectedValue);
        },
        style: {
          flex: 1
        }
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
      var _this2 = this;

      var cols = this.props.cols;
      return _react.default.createElement(_react2.View, {
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
}(_react.default.Component);

exports.MultiPicker = MultiPicker;
MultiPicker.propTypes = _props.MultiPickerPropTypes;
MultiPicker.defaultProps = _props.MultiPickerDefaultProps;
var _default = MultiPicker;
exports.default = _default;