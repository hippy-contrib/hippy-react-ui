import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import Modal from './Modal';
import Button from '../Button';
import Divider, { VerticalDivider } from '../Divider';
import { stopPropagation } from '../../utils/event';
import { hairlineWidth } from '../../utils';
export var COLOR = {
  selectedTextColor: '#108ee9',
  textColor: '#afafaf',
  divider: '#ddd',
  backgroundColor: '#fff'
};
var styles = StyleSheet.create({
  container: {
    transform: [{
      translateY: -50
    }],
    borderColor: '#dddddd',
    borderWidth: hairlineWidth,
    backgroundColor: '#ffffff',
    width: 270,
    paddingTop: 16,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
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
    // justifyContent: 'space-around',
    alignItems: 'center'
  }
});
export var Confirm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Confirm, _React$Component);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, _getPrototypeOf(Confirm).apply(this, arguments));
  }

  _createClass(Confirm, [{
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props = this.props,
          footer = _this$props.footer,
          cancelText = _this$props.cancelText,
          okText = _this$props.okText,
          onCancel = _this$props.onCancel,
          onOk = _this$props.onOk;
      if (footer) return footer;
      return React.createElement(View, {
        style: styles.footer
      }, React.createElement(Button, {
        type: "ghost",
        style: {
          flex: 1,
          borderWidth: 0,
          borderRadius: 0
        },
        onClick: onCancel
      }, cancelText), React.createElement(VerticalDivider, null), React.createElement(Button, {
        type: "ghost",
        style: {
          flex: 1,
          borderWidth: 0,
          borderRadius: 0
        },
        onClick: onOk
      }, okText));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          title = _this$props2.title,
          footer = _this$props2.footer,
          otherProps = _objectWithoutProperties(_this$props2, ["children", "title", "footer"]);

      return React.createElement(Modal, otherProps, React.createElement(View, {
        style: [styles.container],
        onClick: stopPropagation
      }, React.createElement(View, {
        style: styles.header,
        onClick: stopPropagation
      }, title), React.createElement(View, {
        style: styles.body,
        onClick: stopPropagation
      }, children), React.createElement(Divider, {
        color: '#dddddd'
      }), this.renderFooter()));
    }
  }]);

  return Confirm;
}(React.Component);
export default Confirm;