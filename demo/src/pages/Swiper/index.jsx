import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Swiper from '../../../../src/components/Swiper';

class SwiperPage extends React.Component {
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
				<Swiper>
					<View style={{ width: 100, marginRight: 20, backgroundColor: 'red' }}>1</View>
					<View style={{ width: 100, marginRight: 20, backgroundColor: 'red' }}>2</View>
					<View style={{ width: 100, marginRight: 20, backgroundColor: 'red' }}>3</View>
					<View style={{ width: 100, marginRight: 20, backgroundColor: 'red' }}>4</View>
					<View style={{ width: 100, marginRight: 20, backgroundColor: 'red' }}>5</View>
				</Swiper>
			</View>
		);
	}
}

export default withRouter(SwiperPage);
