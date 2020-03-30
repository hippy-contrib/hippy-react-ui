import React from 'react';
import { StyleSheet, View, ScrollView } from '@hippy/react';

import Panel from './Panel';
import { Props, DefaultProps } from './props'
import { flattenStyle } from '../../utils';
import { ISWEB } from '../../utils';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fefcec',
		height: 34,
		lineHeight: 34,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		paddingLeft: 8,
		paddingRight: 8,
		flexDirection: 'row',
	},
})
export class NoticeBar extends React.Component {

	constructor (props) {
		super(props);

		const { horizontal } = this.props;
		this.axis = horizontal ? 'x' : 'y';
		this.panelRefs = {};

		this.onScroll = this.onScroll.bind(this);
		this.scrollTo = this.scrollTo.bind(this);
	}
	componentWillUnmount() {
		this.clearScrollBuffer();
	}

	clearScrollBuffer() {
		if (this.scrollBuffer) {
			clearTimeout(this.scrollBuffer);
		}
	}

	getClosestPanel (distance = 0) {
		let minDist = 9999999;
		let index = -1;
		let location = -1;
		Object.keys(this.panelRefs).forEach((key, ind) => {
			const { panelLayout } = this.panelRefs[key];
			const currentDist = panelLayout[this.axis];
			const absDist = Math.abs(currentDist - distance);
			if (absDist < minDist) {
				minDist = absDist;
				index = ind;
				location = currentDist;
			}
		})
		return { index, location }
	}
	
	scrollTo (value) {
		const x = this.axis === 'x' ? value : 0;
		const y = this.axis === 'y' ? value : 0;
		if (this.scrollerRef) {
			ISWEB ?
				this.scrollerRef.scrollTo(x, y, true) :
				this.scrollerRef.scrollTo({x,  y, animated: true })
		}
	}

	// web 需要优化，不需要每次都执行操作，看看速度是否为0
	onScroll (e) {
		const distance = e.contentOffset[this.axis];
		this.clearScrollBuffer();
		this.scrollBuffer = setTimeout(() => {
			this.clearScrollBuffer();
			const { location, index } = this.getClosestPanel(distance);
			if (index !== -1) {
				this.scrollTo(location);
			}
		}, 180);
	}
	componentDidMount () {
		console.log('componentDidMount');
	}
	render () {
		const { children, horizontal, style } = this.props;
		// 兼容web和hippy，web没有onScrollEndDrag，所以只能在onScroll事件中做处理
		const funcName = ISWEB ? 'onScroll' : 'onScroll';
		const onScrollProps = { [funcName]: this.onScroll}
		return (
			<ScrollView
				horizontal={horizontal}
				contentContainerStyle={flattenStyle([styles.container, flattenStyle(style)])}
				{ ...onScrollProps }
				ref={el => (this.scrollerRef = el)}
				scrollEventThrottle={32}
			>
				{
					React.Children.map(children, (child, index) =>
						<Panel ref={ref => this.panelRefs[index] = ref}>{ child }</Panel>
					)
				}
			</ScrollView>
		)
	}
}


NoticeBar.propTypes = Props;
NoticeBar.defaultProps = DefaultProps;

export default NoticeBar;
