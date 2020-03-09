import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import NoticeBar from '../../../../src/components/NoticeBar';

class NoticeBarPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<NoticeBar
				>111sdfasdfasdflkjasldjalsdjflajdflaksdj11111sdfasdfasdflkjasldjalsdjflajdflaksdj11</NoticeBar>
				
			</View>
		);
	}
}

export default withRouter(NoticeBarPage);
