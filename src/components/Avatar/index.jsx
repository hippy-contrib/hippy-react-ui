import React from 'react';

import Icon, { IconProps, DefaultIconProps } from '../Icon';

export class Avatar extends React.Component {
	render () {
		return (
			<Icon { ...this.props } />
		);
	}
}

Avatar.propTypes = IconProps;

Avatar.defaultProps = {
	...DefaultIconProps,
	size: 'md',
};

export default Avatar