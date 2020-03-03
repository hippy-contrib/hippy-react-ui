import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import Modal from './Modal';
import Button from '../Button';
import Divider, { VerticalDivider } from '../Divider';
import { stopPropagation } from '../../utils/event';
import { hairlineWidth } from '../../utils';

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}

const styles = StyleSheet.create({
	container: {
		transform: [{ translateY: -50 }],
		borderColor: '#dddddd',
		borderWidth: hairlineWidth,
		backgroundColor: '#ffffff',
		width: 270,
		paddingTop: 16,
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
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

export class Confirm extends React.Component {

	renderFooter () {
		const { footer, cancelText, okText, onCancel, onOk } = this.props;
		if (footer) return footer;
		return (
			<View style={styles.footer}>
				<Button type='ghost' style={{ flex: 1, borderWidth: 0, borderRadius: 0 }} onClick={onCancel}>{cancelText}</Button>
				<VerticalDivider />
				<Button type='ghost' style={{ flex: 1, borderWidth: 0, borderRadius: 0 }} onClick={onOk}>{okText}</Button>
			</View>
		);
	}
	render () {
		const {
			children,
			title,
			footer,
			...otherProps
		} = this.props;
		return (
			<Modal { ...otherProps }>
				<View style={[styles.container, ]} onClick={stopPropagation}>
					<View style={styles.header} onClick={stopPropagation}>
						{title}
					</View>
					<View style={styles.body} onClick={stopPropagation}>
						{ children }
					</View>
					<Divider color={'#dddddd'} />
					{ this.renderFooter() }
				</View>
			</Modal>
		);
	}
}

export default Confirm;
