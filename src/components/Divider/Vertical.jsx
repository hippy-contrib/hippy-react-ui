import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';

import { hairlineWidth } from '../../utils';

const styles = StyleSheet.create({
	divider: {
		alignSelf: 'stretch',
		// transform: [{ scaleX: 0.5 }],
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
	width: hairlineWidth,
	style: {},
};
export default Divider;
