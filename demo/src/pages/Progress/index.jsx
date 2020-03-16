import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Progress from '../../../../src/components/Progress';

class ProgressPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<Progress percent={77} type='ease-in'/>
				<View style={{ width: 0, height: 44 }}/>
				<Progress percent={77} unfilled={false} type='linear'/>
				<View style={{ width: 0, height: 44 }}/>
				<Progress percent={77} style={{ backgroundColor: 'red'}} type='ease_bezier'/>
				<View style={{ width: 0, height: 44 }}/>
				<Progress percent={77} style={{ backgroundColor: 'red'}} barStyle={{ backgroundColor: 'green'}}/>
			</View>
		);
	}
}

export default withRouter(ProgressPage);
