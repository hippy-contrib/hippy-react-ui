import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import stylePropType from 'react-style-proptype';
import PropTypes from 'prop-types';

import { hairlineWidth } from '../../utils';
export { Divider as VerticalDivider } from './Vertical';

const styles = StyleSheet.create({
	divider: {
		alignSelf: 'stretch',
		// transform: [{ scaleY: 0.5 }],
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
	color: '#ddd',
	height: hairlineWidth,
	style: {},
};
export default Divider;
