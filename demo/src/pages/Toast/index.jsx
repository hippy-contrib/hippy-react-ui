import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Toast from '../../../../src/components/Toast';
import Button from '../../../../src/components/Button';

class ToastPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {
			first: {
				visible: true,
			}
		}
	}
	componentDidMount () {
		// this.firstRef.start(); 
	}
	render () {
		const { history } = this.props;
		return (
			<View style={{ paddingHorizontal: 12, display: 'block' }} onClick={() => history.goBack()}>
				<Button onClick={() => this.setState({ first: { visible: true } })}>Open Toast</Button>
				<Toast
					ref={ref => this.firstRef = ref}
					visible={this.state.first.visible}
					onClose={() => this.setState({ first: { visible: false } })}
					>sdfsdfsd</Toast>
			</View>
		);
	}
}

export default withRouter(ToastPage);
