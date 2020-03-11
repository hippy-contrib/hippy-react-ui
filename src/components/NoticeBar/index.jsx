import React from 'react';
import { ScrollView, StyleSheet, View } from '@hippy/react';

import { NoticeBarPropTypes, NoticeBarDefaultPropTypes } from './props'

import Text from '../Text';
import Icon from '../Icon';
import Marquee from './marquee';

import Notice from './notice.png';
import Cancel from './nb-cancel.png';
import Right from './right.png';

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
		const { children, marqueeProps } = this.props;
		return (
			<View style={styles.container} >
				<Icon
					containerStyle={styles.leftIcon}
					style={{ height: 18, width: 18 }}
					source={Notice}
				/>
				<Marquee { ...marqueeProps } >
					{children}
				</Marquee>
				<Icon
					containerStyle={styles.rightIcon}
					style={{ height: 18, width: 18 }}
					source={Right}
				/>
			</View>
		)
	}
}


NoticeBar.propTypes = NoticeBarPropTypes;
NoticeBar.defaultProps = NoticeBarDefaultPropTypes;

export default NoticeBar;
