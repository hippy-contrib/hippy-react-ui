import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Button from '../../../../src/components/Button';
import Text from '../../../../src/components/Text';

class ButtonPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1, paddingHorizontal: 12, display: 'flex' }} onClick={() => history.goBack()}>
				<Button onClick={() => console.log('onClick')}>Primary</Button>
				<Button style={{ marginTop: 24 }} type='ghost' onClick={() => console.log('onClick')}>Ghost</Button>
				<Button style={{ marginTop: 24 }} size='small' type='ghost' onClick={() => console.log('onClick')}>Ghost</Button>
				<Button style={{ marginTop: 24 }} disabled onClick={() => console.log('onClick')}>Ghost</Button>
				<Button style={{ marginTop: 24 }} activeStyle={{ backgroundColor: 'red' }} onClick={() => console.log('onClick')}>Ghost</Button>
				<Button style={{ marginTop: 24 }} activeStyle={{ backgroundColor: 'red' }} onClick={() => console.log('onClick')}><Text color='red'>custom title</Text></Button>
			</View>
		);
	}
}

export default withRouter(ButtonPage);
