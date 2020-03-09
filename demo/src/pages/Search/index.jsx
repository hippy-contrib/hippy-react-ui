import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Search from '../../../../src/components/Search';

class SearchPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	constructor(props) {
		super(props);

		this.state = {
			firstValue: '',
		}
	}
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<Search
					placeholder='请输入'
					defaultValue=''
					value={this.state.firstValue}
					showCancelButton
					disabled={false}
					cancelText={'关闭'}
					onSubmit={(value) => console.log('onSubmit', value)}
					onChange={(value) => this.setState({ firstValue: value })}
					onFocus={() => console.log('onFocus')}
					onBlur={(value) => console.log('onBlur')}
					onCancel={() => console.log('onCancel')}
					onClear={() => console.log('onClear')}
				/>
			</View>
		);
	}
}

export default withRouter(SearchPage);
