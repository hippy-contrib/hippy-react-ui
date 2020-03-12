import React from 'react';
import { StyleSheet, View, Animation } from '@hippy/react';

import { ProgressPropTypes, ProgressDefaultProps } from './props'
import { ISWEB } from '../../utils';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#dddddd',
		height: 4,
		display: 'flex',
		flexDirection: 'row',
	},
	barStyle: {
		backgroundColor: '#108ee9',
		height: 4,
		width: 20,
	}
})
export class Progress extends React.Component {

	constructor (props) {
		super(props);
		
		this.state = {
			width: 0,
			barWidth: 0,
		}

		this.startAnimate = this.startAnimate.bind(this);
	}
	getPercent () {
		const { percent } = this.props;
		return Math.max(Math.min(percent, 100), 0) | 0; // | 0 取整
	}
	setContainerWidth ({ layout: { width } }) {
		this.setState({ containerWidth: width }, () => this.startAnimate());
	}
	startAnimate ({ layout: { width } }) {
		const containerWidth = width;
		const { animated, ease_bezier } = this.props;
		const barWidth = Math.floor(containerWidth / 100 * this.getPercent());

		this.scrollAnimation = new Animation({
			duration: animated ? 5000 : 0,   //动画持续时长
			startValue: 0,
			toValue: barWidth,
			delay: 0,     //至动画真正开始的延迟时间
			mode: "timing",  //动画模式，现在只支持timing
			timingFunction: ease_bezier,  //动画缓动函数
		});
		this.setState({ barWidth, containerWidth }, () => {
			if (this.barref && this.scrollAnimation) {
				ISWEB && this.scrollAnimation.setRef(this.barref); // web情况下需要绑定在ref上
				this.scrollAnimation.start();
			}
		})
	}
	componentWillUnmount () {
		this.scrollAnimation && this.scrollAnimation.destory();
	}
	render () {
		const { style, barStyle, unfilled } = this.props;
		const { containerWidth } = this.state;
		const fillStyle = unfilled ? {} : { backgroundColor: 'transparent' };
		return (
			<View
				style={[styles.container, fillStyle, style]}
				onLayout={this.startAnimate}
			>
				{
					containerWidth &&
					<View
						ref={ref => this.barref = ref}
						style={[styles.barStyle, barStyle, { width: this.scrollAnimation || 0 }]}
					/>
				}
			</View>
		)
	}
}


Progress.propTypes = ProgressPropTypes;
Progress.defaultProps = ProgressDefaultProps;

export default Progress;
