"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Picker = exports.COLOR = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@hippy/react");

var _Modal = _interopRequireDefault(require("../Modal"));

var _SinglePicker = _interopRequireDefault(require("./SinglePicker"));

var _MultiPicker = _interopRequireDefault(require("./MultiPicker"));

var _Cascader = _interopRequireDefault(require("./Cascader"));

var _props = require("./props");

var _utils = require("../../utils");

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
exports.COLOR = COLOR;

var styles = _react2.StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderColor: '#dddddd',
    borderWidth: _utils.hairlineWidth,
    backgroundColor: '#ffffff'
  },
  pickerContainer: {// transform: [{ translateY: -50 }],
  },
  headerContainer: {
    height: 42,
    paddingHorizontal: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#888888'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
/**
 * 
 * itemStyle: {},
	indicatorStyle: {},
	value: '',
	cols: 1,
	okText: '确定',
	dismissText: '取消',
	disabled: false,
	cascade: false,
	onOk: () => {},
	onDismiss: () => {},
	title: () => {},
	format: () => {},
	onChange: () => {},
	onPickerChange: () => {},
	onVisibleChange: () => {},
 */


var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  _createClass(Picker, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var cascade = nextProps.cascade;
      var Comp = cascade ? _Cascader.default : _MultiPicker.default;

      if (nextProps.hasOwnProperty('value') && !(0, _utils.arrayCompare)(nextProps.value, prevState.values)) {
        return {
          values: Comp.initValues(nextProps.data, nextProps.value, nextProps.cols)
        };
      }

      return null;
    }
  }]);

  function Picker(props) {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this, props));
    var data = props.data,
        value = props.value,
        defaultValue = props.defaultValue,
        cascade = props.cascade;
    _this.state = {
      values: _this.initValues(data, value || defaultValue, cascade)
    };
    _this.handleOnChange = _this.handleOnChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Picker, [{
    key: "initValues",
    value: function initValues(d, val, cascade) {
      var data = d || this.props.data;
      var value = val || this.props.value || this.props.defaultValue;
      var Comp = cascade ? _Cascader.default : _MultiPicker.default;
      return Comp.initValues(data, value, this.props.cols);
    }
    /**
     * 
     * @param {Int} index 获取指定列的值
     */
    // getValue (index) {
    // 	const { value } = this.props;
    // 	if (!Array.isArray(value)) {
    // 		console.warn('value should be an array');
    // 		return '';
    // 	}
    // 	return value[index] || '';
    // }
    // initEmptyValue () {
    // 	const cols = ( + this.props.cols ) || 1;
    // 	return Array.from(Array(Math.max(cols, 1))).map(() => '');
    // }

  }, {
    key: "handleOnChange",
    value: function handleOnChange(values) {
      var onChange = this.props.onChange;
      if (!this.props.hasOwnProperty('value')) this.setState({
        values: values
      });
      onChange(values);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          okText = _this$props.okText,
          dismissText = _this$props.dismissText,
          onOk = _this$props.onOk,
          onDismiss = _this$props.onDismiss,
          title = _this$props.title,
          visible = _this$props.visible,
          cols = _this$props.cols,
          data = _this$props.data,
          cascade = _this$props.cascade;
      var values = this.state.values;
      var Comp = cascade ? _Cascader.default : _MultiPicker.default;
      if (!visible) return null;
      return (
        /*#__PURE__*/
        _react.default.createElement(_Modal.default, {
          transparent: false,
          darkStatusBarText: true,
          visible: visible,
          animated: true,
          animation: 'fade',
          animationDuration: 300,
          onMaskClick: function onMaskClick() {},
          title: 'Picker',
          okText: 'ok',
          cancelText: 'cancel',
          onOk: function onOk() {},
          onCancel: function onCancel() {},
          style: {
            display: 'block'
          }
        },
        /*#__PURE__*/
        _react.default.createElement(_react2.View, {
          style: styles.container
        },
        /*#__PURE__*/
        _react.default.createElement(_Header.default, {
          okText: okText,
          dismissText: dismissText,
          onOk: onOk,
          onDismiss: onDismiss,
          title: title
        }),
        /*#__PURE__*/
        _react.default.createElement(Comp, {
          data: data,
          value: values,
          cols: cols,
          onChange: this.handleOnChange,
          style: [styles.pickerContainer]
        }, children)))
      );
    }
  }]);

  return Picker;
}(_react.default.Component);

exports.Picker = Picker;

_defineProperty(Picker, "Item", _SinglePicker.default.Item);

Picker.propTypes = _props.PickerPropTypes;
Picker.defaultProps = _props.PickerDefaultProps;
var _default = Picker;
exports.default = _default;