import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import Modal from './Modal';
import Button from '../Button';
import Text from '../Text';
import Divider, { VerticalDivider } from '../Divider';
import { stopPropagation } from '../../utils/event';

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}
/**
 * containerStyle: StyleProps,
	title: ChildrenProps,
	footer: ChildrenProps,
	okText:PropTypes.string,
	cancelText: PropTypes.string,
	onOk: PropTypes.func,
	onCancel: PropTypes.func,
	titleStyle: StyleProps,
	bodyStyle: StyleProps,
	footerStyle: StyleProps,
 */
const styles = StyleSheet.create({
	container: {
		// flex: 3,
		transform: [{ translateY: -50 }],
		borderColor: '#dddddd',
		borderWidth: 1,
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
				<Button style={{ flex: 1 }} onClick={onCancel}>{cancelText}<Text color="red" style={{ color: 'green' }}>{cancelText}</Text></Button>
				<VerticalDivider />
				<Button style={{ flex: 1, color: '#108ee9' }} onClick={onOk}>{okText}</Button>
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
