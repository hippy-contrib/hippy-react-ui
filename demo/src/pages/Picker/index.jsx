import React from 'react';
import { View } from '@hippy/react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Picker from '../../../../src/components/Picker';
import Button from '../../../../src/components/Button';
import district from './district';

const season = [
	[
		{ value: '2019', label: '2019'},
		{ value: '2020', label: '2020'},
	],
	[
		{ value: 'spring', label: '春'},
		{ value: 'summer', label: '夏'},
		{ value: 'fall', label: '秋'},
		{ value: 'winter', label: '冬'},
	]
];

class PickerPage extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
	};

	constructor (props) {
		super(props);

		this.state = {
			value : [],
			visible: false,
			multiVisible: true,
			multiValue: [],
		}
	}
	render () {
		const { history } = this.props;
		const { visible, value, multiValue, multiVisible } = this.state;
		return (
			<View style={{ flex: 1 }} onClick={() => {}}>
				<Button onClick={() => this.setState({ visible: true })}>Open Picker</Button>
				<Button style={{ marginTop: 24 }}onClick={() => this.setState({ multiVisible: true })}>Open MultiPicker</Button>
				<Picker
					data={district}
					value={value}
					visible={visible}
					onChange={value => this.setState({ value })}
					cols={3}
					transparent={false}
					darkStatusBarText={true}
					animated={true}
					animation={'fade'}
					animationDuration={300}
					onMaskClick={() => this.setState({ visible: false })}
					title={'Picker'}
					okText={'ok'}
					dismissText={'cancel'}
					onOk={() => this.setState({ visible: false })}
					onCancel={() => this.setState({ visible: false })}
				>
				</Picker>
				<Picker
					data={season}
					value={multiValue}
					visible={multiVisible}
					onChange={multiValue => this.setState({ multiValue })}
					cols={2}
					cascade={false}
					transparent={false}
					darkStatusBarText={true}
					animated={true}
					animation={'fade'}
					animationDuration={300}
					onMaskClick={() => this.setState({ multiVisible: false })}
					title={'Multi Picker'}
					okText={'ok'}
					dismissText={'cancel'}
					onOk={() => this.setState({ multiVisible: false })}
					onCancel={() => this.setState({ multiVisible: false })}
				/>
			</View>
		);
	}
}

export default withRouter(PickerPage);
