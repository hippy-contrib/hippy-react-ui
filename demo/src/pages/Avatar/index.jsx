import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Avatar from '../../../../src/components/Avatar';

class AvatarPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1, paddingLeft: 48, paddingRight: 48, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
				<Avatar
					source={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png'}
					onClick={() => history.push('/')}
					resizeMode={'cover'}
				/>
				<Avatar
					size={56}
					rounded={false}
					source={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png'}
					onClick={() => history.push('/')}
					resizeMode={'cover'}
				/>
				<Avatar
					size={56}
					containerStyle={{ borderRadius: 28 }}
					rounded={false}
					source={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png'}
					onClick={() => history.push('/')}
					resizeMode={'repeat'}
				/>
			</View>
		);
	}
}

export default withRouter(AvatarPage);
