import React from 'react';
import { View, ScrollView } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Input from '../../../../src/components/Input';

class InputPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	constructor(props) {
		super(props);

		this.state = {
			firstValue: '',
			placeholderTextColor: 'red'
		}
		setTimeout(() => {
			this.setState({ placeholderTextColor: 'green'});
		}, 3000)
	}
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => console.log('fuck')}>
				<Input
					value={this.state.firstValue}
					// placeholderTextColor={this.state.placeholderTextColor}
					placeholder={'Please'}
					onChange={(firstValue) => this.setState({ firstValue })}
				/>
				<Input
					style={{ marginTop: 12, backgroundColor: '#efefef', height: 44 }}
					placeholderTextColor={'#888888'}
					placeholder={'Please'}
					// onChange={(firstValue) => this.setState({ firstValue })}
				/>
			</View>
		);
	}
}

export default withRouter(InputPage);
