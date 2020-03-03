import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import { createPortal } from 'react-dom';

import Text from '../Text';
import { toastPropTypes, toastDefaultProps } from './props';
import { stopPropagation } from '../../utils/event';

const styles = StyleSheet.create({
	container: {
		position: 'fixed',
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
	createNode () {
		const doc = window.document;
    this.node = doc.createElement('div');
		doc.body.appendChild(this.node);
		return this.node;
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
		console.log('handleMaskClick', allowClose);
		return stopPropagation(event);
	}
	handleBodyClick (event) {
		return stopPropagation(event);
	}
	renderBody () {
		const { children, onLayout } = this.props;
		const isElement = (Array.isArray(children) ? children : [ children ])
			.every(item => typeof item === 'string' || typeof item === 'number');
		
		return (
			<View style={styles.container} onLayout={onLayout} onClick={this.handleMaskClick}>
				<View style={styles.bodyContainer} onClick={this.handleBodyClick}>
					{
						isElement ?
							<Text color="#ffffff">{children}</Text> :
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
		this.createNode();
    return createPortal(
      this.renderBody(), //塞进传送门的JSX
      this.node //传送门的另一端DOM node
    );
  }

  componentWillUnmount() {
		window.document.body.removeChild(this.node);
		this.timeout && clearTimeout(this.timeout);
  }
}

Toast.propTypes = toastPropTypes;
Toast.defaultProps = toastDefaultProps;

export default Toast;