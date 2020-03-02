import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Card from '../../../../src/components/Card';

class CardPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1, paddingHorizontal: 12, display: 'flex' }} onClick={() => history.goBack()}>
				<Card>
					sdflsdf
				</Card>
			</View>
		);
	}
}

export default withRouter(CardPage);
