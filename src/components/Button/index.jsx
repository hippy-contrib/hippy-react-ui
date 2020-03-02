import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import PropTypes from 'prop-types'

import { StyleProps, ChildrenProps } from '../../types';
import { stopPropagation } from '../../utils/event';
import { fontSizesMap } from '../../utils/fontSize';
import Text from '../Text';

import {
	// StyleProps,
	// DefaultStyleProps,
	ClickableProps,
	DefaultClickableProps,
	LayoutableProps,
	DefaultLayoutableProps,
} from '../../types';

export const COLOR = {
	selectedTextColor: '#108ee9',
	textColor: '#afafaf',
	divider: '#ddd',
	backgroundColor: '#fff'
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: 44,
		paddingHorizontal: 12,
		borderRadius: 4,
	},
	primaryContainer: {
		color: '#fff',
		backgroundColor: '#108ee9',
	},
	primaryText: {
		color: '#fff',
	},
	ghostContainer: {
		backgroundColor: '#fff',
		color: '#108ee9',
		borderWidth: 0.5,
		borderColor: '#dddddd'
	},
	ghostText: {
		color: '#108ee9',
	},
	activating: {
		opacity: 0.7,
	},
	disabled: {
		opacity: 0.6,
	},
	large: {
		fontSize: fontSizesMap['md'],
	},
	small: {
		height: 30,
		fontSize: fontSizesMap['xs'],
	}
})
export class Button extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isActive: false,
		}
	}

	handleClick = (event) => {
		const { onClick, disabled } = this.props;
		!disabled && onClick(event);
		return stopPropagation(event);
	}
	getStyle () {
		const { style, disabled, size, activeStyle, type } = this.props;
		const { isActive } = this.state;
		const { large, small, activating } = styles;
		const containerStyle = [
			styles.container,
			size === 'small' ? small : large,
			styles[`${type}Container`] || styles['primaryContainer'],
			style,
		];
		disabled && containerStyle.push(styles.disabled);
		isActive && containerStyle.push(activating, activeStyle);
		
		return containerStyle;
	}
	setStatus (isActive) {
		const { disabled } = this.props;
		!disabled && this.setState({ isActive });
	}
	renderChildren () {
		const { title, children, type, size, titleStyle } = this.props;
		return (
			<Text style={[ styles[`${type}Text`] || styles['primaryText'], titleStyle ]} size={size === 'large' ? 'md' : 'xs'}>
				{ children || title }
			</Text>
		);

	}
	render () {
		return (
			<View
				onClick={this.handleClick}
				style={this.getStyle()}
				onTouchDown={() => this.setStatus(true)}
				onTouchStart={() => this.setStatus(true)}
				onTouchEnd={() => this.setStatus(false)}
			>
				{ this.renderChildren() }
			</View>
		);
	}
}

Button.propTypes = {
	...LayoutableProps,
	...ClickableProps,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(['primary', 'ghost']),
	size: PropTypes.oneOf(['small', 'large']),
	activeStyle: StyleProps,
	titleStyle: StyleProps, // 文字样式，作用在text的
	style: StyleProps,
	title: ChildrenProps,
}

Button.defaultProps = {
	...DefaultClickableProps,
	...DefaultLayoutableProps,
	disabled: false,
	type: 'primary',
	size: 'large',
	activeStyle: {},
	titleStyle: {},
	style: {},
	title: '',
}

export default Button;
