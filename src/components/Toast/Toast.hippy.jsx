import React from 'react';
import { View, StyleSheet } from '@hippy/react';

import Text from '../Text';
import Modal from '../Modal';
import { toastPropTypes, toastDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0,0,0,0)',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
	},
	bodyContainer: {
		position: 'absolute',
		backgroundColor: 'rgba(58, 58, 58, 0.9)',
		padding: 8,
		borderRadius: 8,
		transform: [{ translateY: -50 }],
	}
})
export class Toast extends React.Component {
	constructor() {
    super(...arguments);
		
		this.state = {
			open: false,
		}
		this.handleBodyClick = this.handleBodyClick.bind(this);
		this.handleMaskClick = this.handleMaskClick.bind(this);

	}
	componentDidMount () {
		this.props.visible &&	this.startTiming();
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		!prevProps.visible && this.props.visible && this.startTiming();
	}
	startTiming () {
		this.timeout && clearTimeout(this.timeout);
		const { duration, onClose } = this.props;
		this.timeout = setTimeout(() => {
			onClose();
		}, duration)
	}
	handleMaskClick (event) {
		const { allowClose, onClose } = this.props;
		allowClose && onClose();
		return stopPropagation(event);
	}
	handleBodyClick (event) {
		return stopPropagation(event);
	}
	renderBody () {
		const { children, onLayout, style, titleStyle } = this.props;
		const isElement = (Array.isArray(children) ? children : [ children ])
			.every(item => typeof item === 'string' || typeof item === 'number');
		
		return (
			<View style={styles.container} onLayout={onLayout} onClick={this.handleMaskClick}>
				<View style={[styles.bodyContainer, style]} onClick={this.handleBodyClick}>
					{
						isElement ?
							<Text style={titleStyle} color="#ffffff">{children}</Text> :
							this.props.children
					}
				</View>
      </View>
		);
	}
  render() {
		const { visible } = this.props;
		if (!visible) return null;
		this.startTiming();

		return (
			<Modal
				transparent
				animated={false}
				visible={visible}
			>
				{ this.renderBody() }
			</Modal>
		);
  }

  componentWillUnmount() {
		this.timeout && clearTimeout(this.timeout);
  }
}

Toast.propTypes = toastPropTypes;
Toast.defaultProps = toastDefaultProps;

export default Toast;
