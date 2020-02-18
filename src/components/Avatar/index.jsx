import React from 'react';

import Icon from '../Icons';
import { propTypes, defaultProps } from '../../types/image';

export class Avatar extends React.Component {
	render () {
		const { ...props } = this.props;
		return (
			<Icon { ...props } />
		);
	}
}

Avatar.propTypes = propTypes;

Avatar.defaultProps = {
	...defaultProps,
	size: 'md',
};

export default Avatar