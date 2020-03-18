import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from 'prop-types';
import { StyleProps, ChildrenProps } from '../../types';
export var modalPropTypes = {
  visible: PropTypes.bool,
  // transparent: PropTypes.bool,
  animated: PropTypes.bool,
  darkStatusBarText: PropTypes.bool,
  // 是否是亮色主体文字，默认字体是黑色的，改成 true 后会认为 Modal 背景为暗色调，字体就会改成白色。
  immersionStatusBar: PropTypes.bool,
  // > Android Only
  autoHideStatusBar: PropTypes.bool,
  animation: PropTypes.oneOf(['none', 'slide', 'fade']),
  animationDuration: PropTypes.number,
  // 动画时间
  // supportedOrientations: PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),
  showMask: PropTypes.bool,
  // 是否显示蒙层
  style: StyleProps,
  // Modal样式
  maskStyle: StyleProps,
  // 蒙层样式
  onRequestClose: PropTypes.func,
  onShow: PropTypes.func,
  onMaskClick: PropTypes.func,
  // 点击mask
  onDismiss: PropTypes.func,
  onOrientationChange: PropTypes.func
};
export var modalDefaultProps = {
  visible: false,
  transparent: false,
  animated: true,
  darkStatusBarText: false,
  // 是否是亮色主体文字，默认字体是黑色的，改成 true 后会认为 Modal 背景为暗色调，字体就会改成白色。
  immersionStatusBar: false,
  autoHideStatusBar: false,
  animation: 'slide',
  animationDuration: 500,
  supportedOrientations: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'],
  showMask: true,
  // 是否显示蒙层
  style: {},
  // Modal样式
  maskStyle: {},
  // 蒙层样式
  onRequestClose: function onRequestClose() {},
  onShow: function onShow() {},
  onMaskClick: function onMaskClick() {},
  onDismiss: function onDismiss() {},
  onOrientationChange: function onOrientationChange() {}
};
export var ConfirmPropTypes = _objectSpread({}, modalPropTypes, {
  containerStyle: StyleProps,
  title: ChildrenProps,
  footer: ChildrenProps,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  titleStyle: StyleProps,
  bodyStyle: StyleProps,
  footerStyle: StyleProps
});
export var ConfirmDefaultPropTypes = _objectSpread({}, modalDefaultProps, {
  containerStyle: {},
  title: '',
  okText: 'ok',
  cancelText: 'cancel',
  onOk: function onOk() {
    return false;
  },
  onCancel: function onCancel() {
    return false;
  },
  titleStyle: {}
});