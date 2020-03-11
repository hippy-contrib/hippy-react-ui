import React from 'react';
import { ScrollView, StyleSheet, View } from '@hippy/react';

import Text from '../Text';
import Icon from '../Icon'
import Notice from './notice.png';

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
	leftIcon: {
		height: 18,
		width: 18,
		marginRight: 8,
	},
	body: {
		height: 34,
		lineHeight: 34,
	},
	rightIcon: {
	}
})
export class NoticeBar extends React.Component {

	componentDidMount () {
		this.bodyRef && this.bodyRef.scrollToWithDuration && this.bodyRef.scrollToWithDuration(0, 999999, 1000)
	}
	render () {
		const { children } = this.props;
		return (
			<View style={styles.container} >
				<Icon
					containerStyle={styles.leftIcon}
					style={{ height: 18, width: 18 }}
					source={Notice}
					onError={(e) => console.log(e)}
				/>
				<ScrollView
					ref={ref => this.bodyRef = ref}
					horizontal
					contentContainerStyle={styles.body}
					showsHorizontalScrollIndicator={false}
				>
					<Text height={34} lineHeight={34} color="#f76a24" style={{ flex: 1 }} numberOfLines={1}>{children}</Text>
				</ScrollView>
				<Icon
					containerStyle={styles.rightIcon}
					style={{ height: 18, width: 18 }}
					source={Notice}
					onError={(e) => console.log(e)}
				/>
			</View>
		)
	}
}

export default NoticeBar;
