import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import PropTypes from 'prop-types';

import Text from '../Text';
import { StyleProps } from '../../types';
import { fontSizes, getFontSize } from '../../utils/fontSize';
import { flattenStyle } from '../../utils';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: 20,
		minWidth: 10,
		borderRadius: 10,
		backgroundColor: '#ff5b05',
		paddingLeft: 6,
		paddingRight: 6,
	},
	badge: {
		color: '#ffffff',
		// backgroundColor: 'green',
		height: 18,
		lineHeight: 18,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	corner: {
		right: -8,
		top: -8,

		// position: 'absolute',
		// right: 0,
		// top: 0,
	},
	dot: {
		height: 8,
		width: 8,
		minWidth: 8,
		minHeight: 8,
		borderRadius: 4,
		padding: 0,
		paddingLeft: 0,
		paddingRight: 0,
	},
	dotCorner: {
		right: -4,
		top: -4,
	}
})
export class Badge extends React.Component {

	getText () {
		const { text, overflowCount } = this.props;
		if (!overflowCount || typeof text !== 'number') return text;
		return text > overflowCount ? `${overflowCount}+` : text;
	}
	getContainerStyle () {
		const { dot, corner, style } = this.props;
		const containerStyle = [styles.container];
		let cornerStyle = dot ? styles.dotCorner : styles.corner;
		dot && containerStyle.push(styles.dot);
		corner && containerStyle.push(cornerStyle);
		containerStyle.push(style);
		return containerStyle;
	}
	render () {
		const { dot, fontStyle, fontSize } = this.props;
		const word = this.getText();
		return (
			<View style={this.getContainerStyle()}>
				{ !dot && <Text color="#ffffff"  numberOfLines={1} size={getFontSize(fontSize)} style={[styles.badge, flattenStyle(fontStyle)]} >{word}</Text>}
			</View>
		);
	}
}

Badge.propTypes = {
	fontSize: PropTypes.oneOfType([PropTypes.oneOf(fontSizes), PropTypes.number]),
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	corner: PropTypes.bool,
	dot: PropTypes.bool,
	overflowCount: PropTypes.number,
	style: StyleProps,
	fontStyle: StyleProps,
}

Badge.defaultProps = {
	fontSize: 'xs',
	text: '',
	corner: true,
	dot: false,
	overflowCount: 99,
	style: {},
	fontStyle: {},
}

export default Badge;
