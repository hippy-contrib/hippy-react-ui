import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Text from '../../../../src/components/Text';

class TextPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};
	render () {
		const { history } = this.props;
		return (
			<View style={{ flex: 1 }} onClick={() => history.goBack()}>
				<Text >11111</Text>
				<Text
					size={'xl'}
					numberOfLines={2}
					ellipsizeMode={'tail'}
				>
					{`2222sfasdfasdfadsfadfasdfadsfadsfasdfasdfadsfasdfasdfasdfasdfasdf2222sfasdfasdfadsfadfasdfadsfadsfasdfasdfadsfasdfasdfasdfasdfasdf`}
				</Text>
				<Text size={'xl'}>
					<Text>3333</Text>
					<Text>
						我说嘿嘿，你说嘿嘿。我说嘿嘿，你说嘿嘿。我说嘿嘿，你说嘿嘿。我说嘿嘿，你说嘿嘿。我说嘿嘿，你说嘿嘿。我说嘿嘿，你说嘿嘿。我说嘿嘿，你说嘿嘿。
						<Text>sdfsdfsd</Text>
					</Text>
					555555
					<Text>sdfsdfsd</Text>
				</Text>
			</View>
		);
	}
}

export default withRouter(TextPage);
