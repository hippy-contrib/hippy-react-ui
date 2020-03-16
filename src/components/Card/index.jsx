import React from 'react';
import { View, StyleSheet } from '@hippy/react';

import { hairlineWidth } from '../../utils';

const styles = StyleSheet.create({
	container: {
		padding: 12,
		backgroundColor: '#fff',
		borderWidth: hairlineWidth,
		borderColor: '#dddddd',
		borderRadius: 4,
	}
})
export const Card = (props) => {
	const { style = {}, ...otherProps } = props;
	const customStyle = Array.isArray(style) ? style : [ style ];
	return <View style={[ styles.container, ...customStyle ]} { ...otherProps }></View>
}

export default Card;
