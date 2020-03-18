import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Animation } from '@hippy/react';

import { ISWEB } from '../../utils';
import {
	// StyleProps,
	// DefaultStyleProps,
	ClickableProps,
	DefaultClickableProps,
	LayoutableProps,
	DefaultLayoutableProps,
} from '../../types';

const CHECKEDBGCOLOR = '#4dd865';
const UNCHECKEDBGCOLOR = '#ffffff';
const ANDUNCHECKEDBGCOLOR = '#efefef';
const BORDERCOLOR = '#eeeeee';

const SIZE = {
	android: {
		container: 72,
		inner: 36,
	},
	ios: {
		container: 52,
		inner: 32,
	}
}

const iosStyles = StyleSheet.create({
	container: {
		height: 32,
		width: SIZE.ios.container,
		borderRadius: 16,
	},
	circle: {
		height: 32,
		width: SIZE.ios.inner,
		borderRadius: 16,
		backgroundColor: '#fff',
		borderWidth: 1,
		left: Math.floor(SIZE.ios.container / 2),
		borderColor: BORDERCOLOR,
	}
})

const andStyles = StyleSheet.create({
	container: {
		height: 24,
		width: SIZE.android.container,
		backgroundColor: ANDUNCHECKEDBGCOLOR,
		borderRadius: 2,
	},
	circle: {
		height: 22,
		width: SIZE.android.inner,
		borderRadius: 2,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: BORDERCOLOR,
		left: Math.floor(SIZE.android.container / 2),
	}
})

const basicStyles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		paddingLeft: 0,
		paddingRight: 0,
		position: 'relative',
	},
	checkedContainer: {
		// alignItems: 'flex-end',
		backgroundColor: CHECKEDBGCOLOR,
	},
	unCheckedContainer: {
		// alignItems: 'flex-start',
		backgroundColor: UNCHECKEDBGCOLOR,
		borderWidth: 1,
		borderColor: BORDERCOLOR
	},
	disabled: {
		opacity: 0.5,
	}
})

export class Switch extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	getCheckedPosition () {
		const { platform } = this.props;
		const size = platform === 'android' ? SIZE.android : SIZE.ios;
		return size.container - size.inner;
	}
	initAnimation () {
		this.destroyAnimation();
		this.checkAnimation = new Animation({
			startValue: 0,
			toValue: this.getCheckedPosition(),
			duration: 240,   //动画持续时长
			delay: 0,     //至动画真正开始的延迟时间
			mode: "timing",  //动画模式，现在只支持timing
			timingFunction: "ease_bezier"  //动画缓动函数
		})
		this.unCheckAnimation = new Animation({
			startValue: this.getCheckedPosition(),
			toValue: 0,
			duration: 240,   //动画持续时长
			delay: 0,     //至动画真正开始的延迟时间
			mode: "timing",  //动画模式，现在只支持timing
			timingFunction: "ease_bezier"  //动画缓动函数
		});
		return {
			checkAnimation: this.checkAnimation,
			unCheckAnimation: this.unCheckAnimation,
		}
	}
	destroyAnimation () {
		this.checkAnimation && this.checkAnimation.destroy();
		this.unCheckAnimation && this.unCheckAnimation.destroy();
	}
	componentWillUnmount () {
		this.destroyAnimation();
	}
	/**
	 * 根据平台，样式，生成对应的style样式
	 */
	getContainerStyle () {
		const { platform, checked, color, disabled } = this.props;
		const { checkedContainer, unCheckedContainer } = basicStyles;
		const { checkAnimation, unCheckAnimation } = this.initAnimation();

		const styles = platform === 'android' ? andStyles : iosStyles;
		const containerStyle = [ styles.container, basicStyles.container ];

		containerStyle.push(checked ? checkedContainer : unCheckedContainer);
		
		// 设置自定义背景颜色
		color && checked && containerStyle.push({ backgroundColor: color });
		
		disabled && containerStyle.push(basicStyles.disabled);

		// 配置动画
		this.leftAnimation = checked ? checkAnimation : unCheckAnimation;
		// setTimeout(() => {
		// 	if (this.circleRef && ISWEB) this.leftAnimation.setRef(this.circleRef);
		// 	this.leftAnimation.start();
		// }, 0);
		return containerStyle;
	}

	handleClick (event) {
		event.preventDefault && event.preventDefault();
		event.stopPropagation && event.stopPropagation();
		const { onClick, onChange, checked, disabled } = this.props;
		if (disabled) return;
		onClick(event);
		onChange(!checked);
		return true;
	}
	animate () {
		if (this.circleRef && this.leftAnimation) {
			ISWEB && this.leftAnimation.setRef(this.circleRef);
			this.leftAnimation.start();
		}
	}
	componentDidMount () {
		this.animate()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (prevProps.checked !== this.props.checked) {
			this.animate();
    }
  }
	render () {
		const { platform } = this.props;
		const styles = platform === 'android' ? andStyles : iosStyles;
		return (
			<View style={this.getContainerStyle()} onClick={this.handleClick}>
				<View
					ref={ref => this.circleRef = ref}
					style={[styles.circle, { left: this.leftAnimation } ]}
				/>
			</View>
		);
	}
}

Switch.propTypes = {
	...LayoutableProps,
	...ClickableProps,
	// style: StyleProps,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	color: PropTypes.string,
	platform: PropTypes.oneOf(['android', 'ios', 'web']),
}

Switch.defaultProps = {
	...DefaultLayoutableProps,
	...DefaultClickableProps,
	// ...DefaultStyleProps,
	checked: false,
	disabled: false,
	onChange: () => {},
	color: CHECKEDBGCOLOR,
	platform: 'ios',
}

export default Switch
