import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Textarea from '../../../../src/components/Textarea';

class TextAreaPage extends React.Component {
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
				<Textarea
					value={this.state.firstValue}
					defaultValue={'sdf'}
					// placeholderTextColor={this.state.placeholderTextColor}
					placeholder={'Please'}
					onChange={(firstValue) => this.setState({ firstValue })}
				/>
				<Textarea
					style={{ marginTop: 12, backgroundColor: '#efefef' }}
					placeholderTextColor={'#888888'}
					placeholder={'Please'}
					numberOfLines={2}
					size={'xs'}
					// onChange={(firstValue) => console.log(firstValue)}
				/>
			</View>
		);
	}
}

export default withRouter(TextAreaPage);
