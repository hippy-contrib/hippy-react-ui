import React from 'react';
import { View, StyleSheet } from '@hippy/react';

export class Panel extends React.Component {

	constructor(props) {
		super(props);

		this.panelLayout = {
			height: 0,
			width: 0,
		}
		this.handleOnLayout = this.handleOnLayout.bind(this);
	}
	handleOnLayout ({ layout: { width, height, x, y } }) {
		this.panelLayout = { width, height, x, y };
		console.log(this.panelLayout);
	}
	componentDidMount () {
		console.log('panel componentDidMount');
	}
	render () {
		const { children } = this.props;
		const { height, width } = this.panelLayout;
		const style = height || width ? { height, width } : {};
		return (
			<View style={style} onLayout={this.handleOnLayout}>
				{ children }
			</View>
		);
	}
}

export default Panel;
