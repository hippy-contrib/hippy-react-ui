import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import Text from '../Text';
import Modal from '../Modal';
import { toastPropTypes, toastDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';
var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  bodyContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(58, 58, 58, 0.9)',
    padding: 8,
    borderRadius: 8,
    transform: [{
      translateY: -50
    }]
  }
});
export var Toast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Toast, _React$Component);

  function Toast() {
    var _this;

    _classCallCheck(this, Toast);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
    _this.state = {
      open: false
    };
    _this.handleBodyClick = _this.handleBodyClick.bind(_assertThisInitialized(_this));
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.visible && this.startTiming();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      !prevProps.visible && this.props.visible && this.startTiming();
    }
  }, {
    key: "startTiming",
    value: function startTiming() {
      this.timeout && clearTimeout(this.timeout);
      var _this$props = this.props,
          duration = _this$props.duration,
          onClose = _this$props.onClose;
      this.timeout = setTimeout(function () {
        onClose();
      }, duration);
    }
  }, {
    key: "handleMaskClick",
    value: function handleMaskClick(event) {
      var _this$props2 = this.props,
          allowClose = _this$props2.allowClose,
          onClose = _this$props2.onClose;
      allowClose && onClose();
      console.log('handleMaskClick', allowClose);
      return stopPropagation(event);
    }
  }, {
    key: "handleBodyClick",
    value: function handleBodyClick(event) {
      return stopPropagation(event);
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          onLayout = _this$props3.onLayout;
      var isElement = (Array.isArray(children) ? children : [children]).every(function (item) {
        return typeof item === 'string' || typeof item === 'number';
      });
      return React.createElement(View, {
        style: styles.container,
        onLayout: onLayout,
        onClick: this.handleMaskClick
      }, React.createElement(View, {
        style: styles.bodyContainer,
        onClick: this.handleBodyClick
      }, isElement ? React.createElement(Text, {
        color: "#ffffff"
      }, children) : this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var visible = this.props.visible;
      if (!visible) return null;
      this.startTiming();
      return React.createElement(Modal, {
        transparent: true,
        animated: false,
        visible: visible
      }, this.renderBody());
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.timeout && clearTimeout(this.timeout);
    }
  }]);

  return Toast;
}(React.Component);
Toast.defaultProps = toastDefaultProps;
export default Toast;