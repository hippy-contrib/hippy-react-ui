import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
	divider: {
		alignSelf: 'stretch'
	}
})
export class Divider extends React.Component {
	render () {
		const { height, color, style = {} } = this.props;
		return (
			<View style={[styles.divider, { height, backgroundColor: color }, style ]} />
		);
	}
}

Divider.propTypes = {
	color: PropTypes.string,
	height: PropTypes.number,
	style: stylePropType,
};

Divider.defaultProps = {
	color: '#eeeeee',
	height: 1,
	style: {},
};
export default Divider;
