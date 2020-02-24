import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Switch from '../../../../src/components/Switch';

class SwitchPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	constructor(props) {
		super(props);
		
		this.state = {
			ios: {
				checked: true,
			},
			and: {
				checked: true,
			}
		}
	}
	render () {
		const { history } = this.props;
		const { ios, and } = this.state;
		return (
			<View style={{ flex: 1, padding: 12 }} onClick={() => history.goBack()}>
				<View style={{ padding: 12 }}>
					<Switch
						checked={ios.checked}
						onChange={(checked) => this.setState({ ios: { ...ios, checked }})}
					/>
				</View>
				<View style={{ padding: 12 }}>
					<Switch
						checked={true}
						disabled
					/>
				</View>
				<View style={{ padding: 12 }}>
					<Switch
						checked={false}
						disabled
					/>
				</View>
				<View style={{ padding: 12 }}>
					<Switch
						checked={and.checked}
						platform={'android'}
						onChange={(checked) => this.setState({ and: { ...and, checked }})}
					/>
				</View>
				<View style={{ padding: 12 }}>
					<Switch
						checked={true}
						platform={'android'}
						disabled
					/>
				</View>
				<View style={{ padding: 12 }}>
					<Switch
						checked={false}
						platform={'android'}
						disabled
					/>
				</View>
			</View>
		);
	}
}

export default withRouter(SwitchPage);
