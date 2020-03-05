import React from 'react';
import { TextInput, StyleSheet, View } from '@hippy/react';

import { stopPropagation } from '../../utils/event';
import { setStyle, removeStyle } from '../../utils/css';
// import './index.css';
/**
 * hippy 当前版本需要给定width和height，否则会crash
 */

export const getStyleId = id => `hy-comp-input-${id}`;

const styles = StyleSheet.create({
	container: {
		height: 34,
		lineHeight: 34,
		width: 200,
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		// justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#eeeeee',
		fontSize: 14,
		paddingLeft: 12,
		textAlign: 'center',
		color: 'red',
		placeholderTextColor: 'greenyellow', // hippy 生效，web不生效
		placeholderTextColors: 'greenyellow',
	},
	border: {
		// borderWidth: 1,
		// borderColor: '#dddddd',
	},
	placeholder: {
		placeholderTextColor: 'green',

	}
})
export class Input extends React.Component {
	
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.styleId = getStyleId(Math.random());
	}
	handleClick (event) {

		return stopPropagation(event);
	}
	componentDidMount () {
		console.log('sdfsdf');
		setStyle(this.styleId, { '#input::placeholder': 'color: #ff0000;' });
	}
	componentWillUnmount() {
		removeStyle(this.styleId);
	}
	componentW
	render () {
		return (
			<View style={{ display: 'flex' }}>
				<TextInput
					id={'input'}
					onClick={this.handleClick}
					style={[ styles.container ]}
					placeholder={"sdfsdf"}
					multiline={false}
					placeholderTextColor={'greenyellow'}
					placeholderTextColors={'greenyellow'}
					// value={'10'}
				/>
			</View>
		);
	}
}

export default Input;
