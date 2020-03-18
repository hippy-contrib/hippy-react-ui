import _objectSpread from "/Users/kiddxu/Desktop/workplace/hippy-react-components/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import PropTypes from 'prop-types';
import { LayoutableProps, DefaultLayoutableProps } from '../../types/event';
export var toastPropTypes = _objectSpread({}, LayoutableProps, {
  duration: PropTypes.number,
  onClose: PropTypes.func,
  showMask: PropTypes.bool,
  // 暂时不支持，都会显示mask
  allowClose: PropTypes.bool,
  visible: PropTypes.bool
});
export var toastDefaultProps = _objectSpread({}, DefaultLayoutableProps, {
  duration: 3000,
  onClose: function onClose() {},
  showMask: true,
  allowClose: true,
  visible: true
});