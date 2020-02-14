import React from 'react';
import { View } from 'hippy-react';
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
			<View style={{ marginTop: 120, width: 200, height: 56 }} onClick={() => history.push('/')}>
				<Icon />
			</View>
		);
	}
}

export default withRouter(IconPage);
