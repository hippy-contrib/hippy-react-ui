import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import { Props, DefaultProps } from './props'


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fefcec',
		height: 34,
		lineHeight: 34,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		paddingLeft: 8,
		paddingRight: 8,
		flexDirection: 'row',
	},
})
export class NoticeBar extends React.Component {

	render () {
		const { children } = this.props;
		return (
			<View style={styles.container} >
				{children}asdfad
			</View>
		)
	}
}


NoticeBar.propTypes = Props;
NoticeBar.defaultProps = DefaultProps;

export default NoticeBar;
