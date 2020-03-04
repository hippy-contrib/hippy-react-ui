import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Input from '../../../../src/components/Input';

class InputPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<Input ></Input>
			</View>
		);
	}
}

export default withRouter(InputPage);
