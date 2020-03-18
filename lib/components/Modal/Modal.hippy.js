import _objectWithoutProperties from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/inherits";

/**
 * Hippy modal中间层，统一
 */
import React from 'react';
import { Modal, View } from '@hippy/react';
import { modalPropTypes, modalDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';
import { styles } from './styles';
/**
 * visible: PropTypes.bool,
	// transparent: PropTypes.bool,
	animated: PropTypes.bool,
	darkStatusBarText: PropTypes.bool, // 是否是亮色主体文字，默认字体是黑色的，改成 true 后会认为 Modal 背景为暗色调，字体就会改成白色。
	immersionStatusBar: PropTypes.bool, // > Android Only
	autoHideStatusBar: PropTypes.bool,
	animationType: PropTypes.oneOf(['none', 'slide', 'fade', 'slide_fade']),
	// supportedOrientations: PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),
	showMask: PropTypes.bool, // 是否显示蒙层
	closeMaskOnClick: PropTypes.bool, // 是否点击蒙层关闭
	style: StyleProps, // Modal样式
	maskStyle: StyleProps, // 蒙层样式
	onRequestClose: PropTypes.func,
	onShow: PropTypes.func,
	onDismiss: PropTypes.func,
	onOrientationChange: PropTypes.func,
 */

export var HippyModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HippyModal, _React$Component);

  function HippyModal(props) {
    var _this;

    _classCallCheck(this, HippyModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HippyModal).call(this, props));
    _this.handleMaskClick = _this.handleMaskClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HippyModal, [{
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
          animation = _this$props.animation,
          animated = _this$props.animated,
          transparent = _this$props.transparent,
          maskStyle = _this$props.maskStyle,
          style = _this$props.style,
          otherProps = _objectWithoutProperties(_this$props, ["children", "animation", "animated", "transparent", "maskStyle", "style"]);

      return React.createElement(Modal, Object.assign({}, otherProps, {
        transparent: true,
        animated: animated,
        animationType: animated ? animation : 'none'
      }), React.createElement(View, {
        style: [styles.mask, transparent ? {
          backgroundColor: 'transparent'
        } : {}, maskStyle, style],
        onClick: this.handleMaskClick
      }, children));
    }
  }]);

  return HippyModal;
}(React.Component);
HippyModal.defaultProps = modalDefaultProps;
export default HippyModal;