/**
 * Modal 动画
 * 分为两步
 * 	1. container 动画
 * 	2. modal主体动画   
 * hippy的动画都是container动画， modal主体需要添加动画？
 * webModal中 container动画是固定的fade，modal主体动画
 * 
 * 添加蒙层，蒙层统一使用fade
 * 动画是Modal主体
 */
import HyModal from './Modal';
export * from './Confirm';
export * from './Popup';
export default HyModal;