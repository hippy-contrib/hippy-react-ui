import React from 'react';
import { View } from '@hippy/react';

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
	}
	render () {
		const { children, style } = this.props;
		const { height, width } = this.panelLayout;
		const customStyle = height || width ? { height, width } : {};
		return (
			<View style={[ style, customStyle ]} onLayout={this.handleOnLayout}>
				{ children }
			</View>
		);
	}
}

export default Panel;
