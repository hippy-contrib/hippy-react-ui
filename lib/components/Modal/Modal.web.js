import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";
import React from 'react';
import Rodal from 'rodal';
import { View } from '@hippy/react';
import { ISWEB } from '../../utils';
import { modalPropTypes, modalDefaultProps } from './props';
import { styles } from './styles';
import { stopPropagation } from '../../utils/event'; // 根据平台动态加载，否则在hippy里面直接引入css文件，会报错
// TODO 做成配置，webpack配置，或者统一入口

if (ISWEB) require('rodal/lib/rodal.css');
var animationTypeMap = {
  slide: 'slideUp',
  fade: 'fade'
};
/**
 * click mask 通过onClose来执行，有一定风险，rodal监听到键盘也会调用onclose
 */

export var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "handleMaskClick",
    value: function handleMaskClick(event) {
      var onMaskClick = this.props.onMaskClick;
      onMaskClick(event);
      return stopPropagation(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          visible = _this$props.visible,
          transparent = _this$props.transparent,
          animated = _this$props.animated,
          animation = _this$props.animation,
          maskStyle = _this$props.maskStyle,
          style = _this$props.style;
      return React.createElement(Rodal, {
        visible: visible,
        width: 100,
        height: 100,
        measure: '%',
        customStyles: {
          backgroundColor: 'transparent',
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center'
        },
        showMask: false,
        customMaskStyles: styles.mask,
        showCloseButton: false,
        duration: animated ? 300 : 0,
        closeMaskOnClick: false,
        animation: animationTypeMap[animation] || 'fade',
        onClose: function onClose() {}
      }, React.createElement(View, {
        style: [styles.mask, transparent ? {
          backgroundColor: 'transparent'
        } : {}, maskStyle, style],
        onClick: this.handleMaskClick
      }, children));
    }
  }]);

  return Modal;
}(React.Component);
Modal.defaultProps = modalDefaultProps;
export default Modal;