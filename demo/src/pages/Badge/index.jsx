import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Badge from '../../../../src/components/Badge';

class BadgePage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ paddingHorizontal: 12, display: 'block' }} onClick={() => history.goBack()}>
				
				<View style={{ height: 32, width: 64, backgroundColor: 'green', }}>
					normal
					<Badge text="8" corner />
				</View>
				<View style={{ marginTop: 36, height: 32, width: 64, backgroundColor: 'deepskyblue', }}>
					max value
					<Badge text={100} />
				</View>
				<View style={{ marginTop: 36, height: 32, width: 64, backgroundColor: 'deepskyblue', }}>
					dot
					<Badge text={100} dot />
				</View>
				<View style={{ marginTop: 36, backgroundColor: 'green', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
					custom Style
					<Badge text={100} dot corner={false} style={{ position: 'relative'}} />
				</View>
			</View>
		);
	}
}

export default withRouter(BadgePage);
