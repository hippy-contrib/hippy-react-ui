import React from "react";
import {ListView, View, StyleSheet, Dimensions, Platform} from "@hippy/react";
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { ListPropTypes, ListDefaultPropTypes} from './props'

const styles = StyleSheet.create({
	container: {
	},
	listItem: {
	}
});

// class Entry extends React.Component<Object, InitialState> {
class List extends React.Component {
	static propTypes = ListPropTypes
	static defaultProps = ListDefaultPropTypes
	constructor(props) {
		super(props);
		this.state = {
			route: 'home',
			offsetTop: 0,
			cacheNodeList: []
		}
		this.setRef = (index, element) => {
			this.listItem = this.listItem || []
			this.listItem[index] = ReactDOM.findDOMNode(element)
		}
		this.listRef = React.createRef()
		this.toggleItem = this.toggleItem.bind(this)
		this.throttle = this.throttle.bind(this)
		this.getRenderRow = this.getRenderRow.bind(this)
		this.setRef = this.setRef.bind(this)
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.props.numberOfRows) return null;
		let cacheNode = this.state.cacheNodeList[index] || {}
		return (
			cacheNode.hide ? null : (
				<View ref={this.setRef.bind(this, index)}
					style={styles.listItem}
				>
					{ this.props.renderRow(index) }
				</View>
			)
		);
	}
	getStyle () {
	}
	render () {
		let {location, match, history, ...props} = this.props
		let stylePro = Array.isArray(props.style) ? props.style : [props.style]
		return (
			<ListView
				ref={this.listRef}
				{...props}
				renderRow={this.getRenderRow}
				style={[styles.container, {
					paddingTop: this.state.offsetTop
				}, ...stylePro]}
				getRowStyle={this.getStyle.bind(this)}
			/>
		);
	}
	initNodeCache () {
		let cacheNodeList = []
		this.listItem && this.listItem.forEach((item, index) => {
			let node = item.parentNode
			let cacheNode = {}
			cacheNode.clientHeight = cacheNode.clientHeight || node.clientHeight
			cacheNode.offsetTop = cacheNode.offsetTop || node.offsetTop
			cacheNode.node = item
			cacheNodeList[index] = cacheNode
		})
		this.setState({
			cacheNodeList
		})
	}
	componentDidMount () {
		if (Platform.OS === 'web') {
			this.initNodeCache()
			setTimeout(this.toggleItem, 0)
			this.scrollCb = this.throttle(this.toggleItem, 100)
			window.addEventListener('scroll', this.scrollCb)
		}
	}
	componentWillUnmount () {
		if (Platform.OS === 'web') {
			window.removeEventListener('scroll', this.scrollCb)
		}
	}
	toggleItem () {
		if (Platform.OS === 'web') {
			let { height } = Dimensions.get('window');
			let { cacheNodeList } = this.state
			let dataSource = this.state.cacheNodeList
			let offsetTop = 0
			let scrollTop = document.documentElement.scrollTop

			dataSource.forEach((item, index) => {
				let top = cacheNodeList[index].offsetTop - scrollTop
				let isHide = (top <= -height || top >= 2 * height)
				let isTopHide = top <= -height
				dataSource[index].hide = isHide
				offsetTop = offsetTop + (isTopHide ? cacheNodeList[index].clientHeight : 0)
			})
			this.setState({
				dataSource,
				offsetTop
			})
		}
	}
	throttle (cb, time) {
		let _lastTime = null;
		return function () {
			let _nowTime = +new Date()
			if (_nowTime - _lastTime > time || !_lastTime) {
				cb();
				_lastTime = _nowTime
			}
		}
	}
}

export default withRouter(List);
