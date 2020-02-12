import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from 'hippy-react';

import Index from './pages/home/index';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
	}
});

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = ({
			pageIndex: 0,
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Index /> 
			</View>
		);
	}
}
