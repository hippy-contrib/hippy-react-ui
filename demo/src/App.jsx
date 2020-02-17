import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from '@hippy/react';
import {
	MemoryRouter as Router,
	Route,
} from "react-router-dom";

import IconPage from './pages/Icon';
import Index from './pages/home';

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
				<Router>
					<Route path="/icon">
						<IconPage />
					</Route>
					<Route exact path="/">
						<Index />
					</Route>
				</Router>
			</View>
		);
	}
}
