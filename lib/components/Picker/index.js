import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import Modal from '../Modal';
import SinglePicker from './SinglePicker';
import MultiPicker from './MultiPicker';
import CascaderPicker from './Cascader';
import { PickerPropTypes, PickerDefaultProps } from './props';
import { hairlineWidth, arrayCompare } from '../../utils';
import Header from './Header';
export var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderColor: '#dddddd',
    borderWidth: hairlineWidth,
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

export var Picker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Picker, _React$Component);

  _createClass(Picker, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var cascade = nextProps.cascade;
      var Comp = cascade ? CascaderPicker : MultiPicker;

      if (nextProps.hasOwnProperty('value') && !arrayCompare(nextProps.value, prevState.values)) {
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
      var Comp = cascade ? CascaderPicker : MultiPicker;
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
      var Comp = cascade ? CascaderPicker : MultiPicker;
      if (!visible) return null;
      return React.createElement(Modal, {
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
      }, React.createElement(View, {
        style: styles.container
      }, React.createElement(Header, {
        okText: okText,
        dismissText: dismissText,
        onOk: onOk,
        onDismiss: onDismiss,
        title: title
      }), React.createElement(Comp, {
        data: data,
        value: values,
        cols: cols,
        onChange: this.handleOnChange,
        style: [styles.pickerContainer]
      }, children)));
    }
  }]);

  return Picker;
}(React.Component);
Picker.Item = SinglePicker.Item;
Picker.defaultProps = PickerDefaultProps;
export default Picker;