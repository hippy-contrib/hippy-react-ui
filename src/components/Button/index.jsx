import React from 'react';
import { View, StyleSheet } from '@hippy/react';

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 44,
	}
})
export class Button extends React.Component {

	render () {
		const { title, style, children, onClick } = this.props;
		return (
			<View onClick={onClick} style={[ styles.container, style]}>
				{ children || title }
			</View>
		);
	}
}

export default Button;
