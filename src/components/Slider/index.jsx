/**
 * 
 */
import React from 'react';
import { StyleSheet, View, ScrollView } from '@hippy/react';

import Panel from './Panel';
import { Props, DefaultProps } from './props'
import { flattenStyle } from '../../utils';
import { ISWEB } from '../../utils';

const styles = StyleSheet.create({
	container: {
	},
})
export class Slider extends React.Component {

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

	scrollToIndex (index) {
		const selectedPanel = this.panelRefs[`${index}`];
		if (!selectedPanel) return;

		const { panelLayout } = selectedPanel;
		const currentDist = panelLayout[this.axis];
		this.scrollTo(currentDist);
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
	getPanelStyle (index) {
		const { cellSpacing, slideWidth, children, horizontal } = this.props;
		const count = React.Children.count(children);
		const marginName = horizontal ? 'marginRight' : 'marginBottom';
		const style = { [marginName]: count !== index + 1 ? cellSpacing : 0 };
		if (this.props.hasOwnProperty('slideWidth')) style.width = slideWidth;
		return style;
	}
	componentDidMount () {
		const { selectedIndex } = this.props;
		this.scrollToIndex(selectedIndex);
	}
	render () {
		const { children, horizontal, style, contentContainerStyle } = this.props;
		return (
			<ScrollView
				horizontal={horizontal}
				style={flattenStyle([styles.container, flattenStyle(style)])}
				contentContainerStyle={flattenStyle(contentContainerStyle)}
				onScroll={this.onScroll}
				ref={el => (this.scrollerRef = el)}
				scrollEventThrottle={32}
				pagingEnabled
			>
				{
					React.Children.map(children, (child, index) =>
						<Panel style={this.getPanelStyle(index)} ref={ref => this.panelRefs[index] = ref}>{ child }</Panel>
					)
				}
			</ScrollView>
		)
	}
}

Slider.propTypes = Props;
Slider.defaultProps = DefaultProps;

export default Slider;
