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
		const { width, color, style = {} } = this.props;
		return (
			<View style={[styles.divider, { width, backgroundColor: color }, style ]} />
		);
	}
}

Divider.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	style: stylePropType,
};

Divider.defaultProps = {
	color: '#ddd',
	width: 1,
	style: {},
};
export default Divider;
