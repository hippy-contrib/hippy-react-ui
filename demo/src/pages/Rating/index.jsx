import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Rating from '../../../../src/components/Rating';

class RatingPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<Rating
					defaultValue={1}
					onChange={value => console.log('rating', value)}
				/>
				<Rating
					defaultValue={5}
					maxValue={4}
					onChange={value => console.log('rating', value)}
				/>
				<Rating
					defaultValue={7}
					size='xl'
					maxValue={10}
					selectedFontStyle={[{ color: 'red' }]}
					onChange={value => console.log('rating', value)}
				/>
			</View>
		);
	}
}

export default withRouter(RatingPage);
