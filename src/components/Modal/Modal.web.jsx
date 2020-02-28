import React from 'react';
import Rodal from 'rodal';
import { View } from '@hippy/react';

import { ISWEB } from '../../utils';
import { modalPropTypes, modalDefaultProps } from './props';
import { styles } from './styles';

// 根据平台动态加载，否则在hippy里面直接引入css文件，会报错
if (ISWEB) require('rodal/lib/rodal.css');
ISWEB && document.createElement("div");

const animationTypeMap = {
	slide: 'slideUp',
	fade: 'fade',
}

/**
 * click mask 通过onClose来执行，有一定风险，rodal监听到键盘也会调用onclose
 */
export class Modal extends React.Component {

	render () {
		const {
			children,
			visible,
			transparent,
			animated,
			animation,
			onMaskClick,
			maskStyle,
		} = this.props;
		return (
			<Rodal
				visible={visible}
				width={100}
				height={100}
				measure={'%'}
				customStyles={{ backgroundColor: 'transparent', padding: 0, justifyContent: 'center', alignItems: 'center' }}
				showMask={false}
				customMaskStyles={styles.mask}
				showCloseButton={false}
				duration={animated ? 300 : 0}
				closeMaskOnClick={false}
				animation={animationTypeMap[animation] || 'fade'}
			>
				<View
					style={[ styles.mask, transparent ? { backgroundColor: 'transparent' } : {}, maskStyle ]}
					onClick={onMaskClick}
				>
						{ children }
				</View>
			</Rodal>
		);
	}
}

Modal.propTypes = modalPropTypes
Modal.defaultProps = modalDefaultProps;

export default Modal;
