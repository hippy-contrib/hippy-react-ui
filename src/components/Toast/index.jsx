/**
 * Toast
 * hippy 使用modal组件来实现
 * web 使用portal组件来实现
 */
import HyToast from './Toast.hippy';
import WebToast from './Toast.web';
import { ISWEB } from '../../utils';

export const Toast = ISWEB ? WebToast : HyToast;

export default Toast;
