import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Navigator from '../../../../src/components/Navigator';
import Button from '../../../../src/components/Button';

class NavigatorPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			value : [],
			visible: false,
			multiVisible: true,
			multiValue: [],
		}
	}
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1, backgroundColor: '#f3f3f3', paddingTop: 24 }} onClick={() => {}}>
				<Navigator
					title={'NavigatorPage'}
					leftContent={'点我'}
				/>
				<Navigator
					containerStyle={{ marginTop: 20 }}
					title={'NavigatorPage'}
					rightContent={<Button type='ghost' style={{ borderWidth: 0 }}>点我</Button>}
					back
					onLeftClick={() => history.goBack()}
				/>
			</View>
		);
	}
}

export default withRouter(NavigatorPage);
