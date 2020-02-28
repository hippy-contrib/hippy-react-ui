/**
 * Hippy modal中间层，统一
 */
import React from 'react';
import { Modal, View } from '@hippy/react';

import { modalPropTypes, modalDefaultProps } from './props';
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


export class HippyModal extends React.Component {

	render () {
		const {
			children,
			animation,
			onMaskClick,
			transparent,
			maskStyle,
			...otherProps
		} = this.props;
		return (
			<Modal
				{ ...otherProps }
				transparent
				animationType={animation}
			>
				<View
					style={[ styles.mask, transparent ? { backgroundColor: 'transparent' } : {}, maskStyle ]}
					onClick={onMaskClick}
				>
						{ children }
				</View>
			</Modal>
		);
	}
}

HippyModal.propTypes = modalPropTypes;
HippyModal.defaultProps = modalDefaultProps;

export default HippyModal;
