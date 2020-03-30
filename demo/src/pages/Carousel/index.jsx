import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Carousel from '../../../../src/components/Carousel';

class CarouselPage extends React.Component {
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
				<Carousel />
			</View>
		);
	}
}

export default withRouter(CarouselPage);
