import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Divider from '../../../../src/components/Divider';

class DividerPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1, paddingLeft: 48, paddingRight: 48, alignItems: 'center', flexDirection: 'column' }} onClick={() => history.goBack()}>
				<Divider />
				<Divider style={{ marginTop: 56 }} color="red" />
				<Divider style={{ marginTop: 56 }} height={8} />
				<Divider style={{ marginTop: 56, height: 8, backgroundColor: 'red' }} />
			</View>
		);
	}
}

export default withRouter(DividerPage);
