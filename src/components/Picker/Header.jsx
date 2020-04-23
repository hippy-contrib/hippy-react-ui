import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import Button from '../Button';
import Text from '../Text';
import { hairlineWidth } from '../../utils';
import { HeaderPropTypes, HeaderDefaultProps } from './props';

const styles = StyleSheet.create({
	container: {
		height: 42,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		borderBottomWidth: hairlineWidth,
		borderColor: '#cccccc',
		overflow: 'hidden',
	},
	button: {
		borderWidth: 0,
		height: 41,
		// borderBottomWidth: hairlineWidth,
		borderColor: '#cccccc',
	},
	title: {
		flex: 1,
		textAlign: 'center',
		lineHeight: 42,
		height: 41.
	}
})
export class Header extends React.Component {
	
	render () {
		const { okText, dismissText, onOk, onDismiss, title } = this.props;
		return (
			<View style={styles.container}>
				<Button style={styles.button} onClick={onDismiss} type='ghost'>{dismissText}</Button>
				<Text size='md' style={styles.title} >{title}</Text>
				<Button style={styles.button} onClick={onOk} type='ghost'>{okText}</Button>
			</View>
		);
	}
}

Header.propTypes = HeaderPropTypes;
Header.defaultProps = HeaderDefaultProps;

export default Header;
