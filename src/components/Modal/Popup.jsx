import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import Modal from './Modal';
import { stopPropagation } from '../../utils/event';
import { hairlineWidth } from '../../utils';

const styles = StyleSheet.create({
	container: {
		// transform: [{ translateY: -50 }],
		borderColor: '#dddddd',
		borderWidth: hairlineWidth,
		backgroundColor: '#ffffff',
		flex: 1,
		minHeight: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		paddingHorizontal: 12,
		paddingBottom: 12,
		justifyContent: 'center',
		alignItems: 'center',
	},
	body: {
		paddingHorizontal: 12,
		paddingBottom: 12,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		color: '#888888',
	},
	footer: {
		flexDirection: 'row',
		// justifyContent: 'space-around',
		alignItems: 'center',
	},
})

export class Popup extends React.Component {
	render () {
		const {
			children,
			title,
			footer,
			...otherProps
		} = this.props;
		return (
			<Modal { ...otherProps } style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
				<View style={[styles.container ]} onClick={stopPropagation}>
					{ children }
				</View>
			</Modal>
		);
	}
}

export default Popup;
