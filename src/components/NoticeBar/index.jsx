import React from 'react';
import { StyleSheet, View } from '@hippy/react';

import { NoticeBarPropTypes, NoticeBarDefaultPropTypes } from './props'

import Icon from '../Icon';
import Marquee from './marquee';

import Notice from '../../../assets/notice.png';
// import Cancel from './nb-cancel.png';
import Right from '../../../assets/right.png';

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
