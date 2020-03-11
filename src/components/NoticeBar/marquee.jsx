/**
 * 跑马灯自动播放组件
 */

import React from 'react';
import { ScrollView, StyleSheet, View, Animation, UIManagerModule } from '@hippy/react';

import { MarqueeProps, MarqueeDefaultProps } from './props';
import Text from '../Text';
import { ISWEB } from '../../utils';

const styles = StyleSheet.create({
	body: {
		height: 34,
		lineHeight: 34,
		// flex: 1,
		display: 'block',
		// overflow: 'scroll',
	},
})

/**
 * loop: true,
	leading: 500,
	trailing: 800,
	fps: 40,
	style: {},
 */
export class Marquee extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			containerWidth: 0,
			textWidth: 0,
			textMarginLeft: 0,
		}
	}

	async getWidth () {
		const result = ISWEB ? this.getWebWidth() : this.getHippyWidth();
		await result;
		return result;
	}
	getWebWidth () {
		return Promise.resolve([this.scrollref.instance.clientWidth, this.scrollref.instance.scrollWidth]);
	}

	getHippyWidth () {
		const getSize = (ref) => {
			return new Promise((resolve, reject) => {
				UIManagerModule.measureInWindow(ref, ({ width }) => resolve(width))
			})
		}
		return Promise.all([getSize(this.scrollref), getSize(this.textref)])
	}
	destroyAnimation () {
		this.scrollAnimation && this.scrollAnimation.destroy();
	}
	startAnimate () {
		if (this.textref && this.scrollAnimation) {
			ISWEB && this.scrollAnimation.setRef(this.textref); // web情况下需要绑定在ref上
			this.scrollAnimation.start();
		}
	}
	/**
	 * 充值初始化状态
	 * 使用destroy，或者setState 都没法奏效
	 */
	resetAnimation () {
		this.scrollAnimation.updateAnimation({ startValue: 0 })
		// if (ISWEB) {
		// 	this.scrollAnimation.renderStyleAttribute(0); // web生效
		// } else {
		// 	this.setState({ textMarginLeft: 0 }); // hippy 生效
		// }
	}
	/**
	 * @description 启动动画
	 */
	async rollUp () {
		this.destroyAnimation();
		const { leading, trailing, speed, loop } = this.props;
		const [ containerWidth, textWidth ] = await this.getWidth();
		if (containerWidth >= textWidth) return;
		const duration = Math.floor((textWidth - containerWidth) / speed) * 1000; 
		this.scrollAnimation = new Animation({
			duration,   //动画持续时长
			startValue: 0,
			toValue: containerWidth - textWidth,
			delay: leading,     //至动画真正开始的延迟时间
			mode: "timing",  //动画模式，现在只支持timing
			timingFunction: "linear",  //动画缓动函数
			// repeatCount: 'loop',
		});
		/**
		 * 监听动画结束时间，如果循环播放，则等待trailing之后，播放动画
		 * 如果不循环，则返回到文本头部
		 */
		this.scrollAnimation.onAnimationEnd(() => {
			this.timeout && clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				if (!loop) return this.resetAnimation()
				else this.startAnimate()
			}, trailing)
		})
		this.setState({ textMarginLeft: this.scrollAnimation }, () => this.startAnimate());
	}
	/**
	 * 禁止手动触发滑动
	 */
	preventWebScroll () {
		if (!ISWEB || !this.scrollref) return;
		this.scrollref.instance.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	}
	componentDidMount () {
		this.preventWebScroll();
		this.rollUp();	
	}
	render () {
		const { children } = this.props;
		const { textMarginLeft } = this.state;
		return (
			<ScrollView
				ref={ref => this.scrollref = ref}
				horizontal
				scrollEnabled={false}
				contentContainerStyle={styles.body}
				showsHorizontalScrollIndicator={false} // 对web无效，需要兼容
			>
				<Text
					ref={ref => this.textref = ref}
					height={34}
					lineHeight={34}
					color="#f76a24"
					style={{ left: textMarginLeft }}
					numberOfLines={1}
					ellipsizeMode={'clip'}
				>
					{children}
				</Text>
			</ScrollView>
		);
	}
}

Marquee.propTypes = MarqueeProps;
Marquee.defaultProps = MarqueeDefaultProps;

export default Marquee;
