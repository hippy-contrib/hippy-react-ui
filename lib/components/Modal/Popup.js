import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import Modal from './Modal';
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
    // transform: [{ translateY: -50 }],
    borderColor: '#dddddd',
    borderWidth: hairlineWidth,
    backgroundColor: '#ffffff',
    flex: 1,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center'
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
export var Popup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popup).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title,
          footer = _this$props.footer,
          otherProps = _objectWithoutProperties(_this$props, ["children", "title", "footer"]);

      return React.createElement(Modal, Object.assign({}, otherProps, {
        style: {
          alignItems: 'flex-end',
          flexDirection: 'row'
        }
      }), React.createElement(View, {
        style: [styles.container],
        onClick: stopPropagation
      }, children));
    }
  }]);

  return Popup;
}(React.Component);
export default Popup;