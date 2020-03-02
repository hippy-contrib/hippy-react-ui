import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import Modal from './Modal';
import Button from '../Button';
import Divider, { VerticalDivider } from '../Divider';
import { stopPropagation } from '../../utils/event';

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}

const styles = StyleSheet.create({
	container: {
		// transform: [{ translateY: -50 }],
		borderColor: '#dddddd',
		borderWidth: 1,
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
