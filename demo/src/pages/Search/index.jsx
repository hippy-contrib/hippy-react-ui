import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Search from '../../../../src/components/Search';

class SearchPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<Search></Search>
			</View>
		);
	}
}

export default withRouter(SearchPage);
