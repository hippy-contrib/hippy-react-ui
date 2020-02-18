import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Icon from '../../../../src/components/Icons';

class IconPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Icon
					source={'http://res.imtt.qq.com/flower-h5/qb_icon_new.png'}
					onPress={() => history.push('/')}
					resizeMode={'cover'}
				/>
			</View>
		);
	}
}

export default withRouter(IconPage);
