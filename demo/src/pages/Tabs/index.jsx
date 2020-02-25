import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Tabs } from '../../../../src/components/Tabs';

class TabsPage extends React.Component {
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
		return (
			<View style={{ flex: 1, padding: 12 }} onClick={() => history.goBack()}>
				<Tabs tabs={[
					{ key: 't1', title: 't1' },
					{ key: 't2', title: 't2' },
					{ key: 't3', title: 't3' },
					{ key: 't4', title: 't4' },
					{ key: 't5', title: 't5' },
				]} initalPage={'t2'}
				>
					<View style={{ backgroundColor: 'red', flex: 1, display: 'flex' }} key="t1">content1<View key="t2">content2</View></View>
					<View key="t2">content2</View>
					<View key="t3">content3</View>
					<View key="t4">content4</View>
					<View key="t5">content5</View>
				</Tabs>
				<Tabs tabs={[
					{ key: 't1', title: 't1' },
					{ key: 't2', title: 't2' },
					{ key: 't3', title: 't3' },
					{ key: 't4', title: 't4' },
					{ key: 't5', title: 't5' },
				]} initalPage={'t2'}
				>
					<View style={{ backgroundColor: 'red', flex: 1, display: 'flex' }} key="t1">content1<View key="t2">content2</View></View>
					<View key="t2">content2</View>
					<View key="t3">content3</View>
					<View key="t4">content4</View>
					<View key="t5">content5</View>
				</Tabs>
			</View>
		);
	}
}

export default withRouter(TabsPage);
