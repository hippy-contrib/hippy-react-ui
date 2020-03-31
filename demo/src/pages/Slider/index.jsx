import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Slider from '../../../../src/components/Slider';

class SliderPage extends React.Component {
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
			<View style={{  }} onClick={() => console.log('fuck')}>
				<Slider cellSpacing={20}>
					<View style={{ width: 100, backgroundColor: 'red' }}>1</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>2</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>3</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>4</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>5</View>
				</Slider>
				<Slider style={{ marginTop: 56 }} slideWidth={200} cellSpacing={50}>
					<View style={{ width: 100, backgroundColor: 'red' }}>1</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>2</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>3</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>4</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>5</View>
				</Slider>
				<Slider style={{ backgroundColor: 'red', height: 100, marginTop: 56 }} horizontal={false} slideWidth={200} cellSpacing={50}>
					<View style={{ width: 100, backgroundColor: 'red' }}>1</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>2</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>3</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>4</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>5</View>
				</Slider>
				<Slider style={{ backgroundColor: 'red', height: 100, marginTop: 56 }} horizontal={false} slideWidth={200} cellSpacing={20}>
					<View style={{ width: 100, backgroundColor: 'red' }}>1</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>2</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>3</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>4</View>
					<View style={{ width: 100, backgroundColor: 'red' }}>5</View>
				</Slider>
			</View>
		);
	}
}

export default withRouter(SliderPage);
