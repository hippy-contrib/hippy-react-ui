/**
 * 抹平hippy和web功能
 * 
 * 1. 弹框container动作
 * 2. 蒙层
 * 3. 全屏
 */

import WebModal from './Modal.web';
import HippyModal from './Modal.hippy';

import { ISWEB } from '../../utils';

let Modal = ISWEB ? WebModal : HippyModal;

export default Modal;