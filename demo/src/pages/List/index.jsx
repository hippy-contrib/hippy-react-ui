import React from "react";
import {ListView, View, StyleSheet, Dimensions, Platform} from "@hippy/react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
		justifyContent: 'flex-start',
		flexDirection: 'column',
	},
	listItem: {
		height: 56,
		paddingLeft: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#ffffff",
		borderBottomWidth: 1,
		borderBottomColor: '#eeeeee',
	}
});

// class Entry extends React.Component<Object, InitialState> {
class Entry extends React.Component {
	static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
	constructor(props) {
		super(props);
		this.state = {
			dataSource: Object.keys(Array.from({length: 100})).map((item, index) => {
        return {
					name: 'item' + index,
					color: this.getRandomColor(),
					hide: false
        }
      }),
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
		this.getRenderRow = this.getRenderRow.bind(this)
		this.setRef = this.setRef.bind(this)
	}
 	getRenderRow (index) {
		if (index < 0 || index >= this.state.dataSource.length) return null;
		const item = this.state.dataSource[index];
		return (
			item.hide ? null : (
			<View style={{
        ...styles.listItem,
				backgroundColor: item.color
      }} ref={this.setRef.bind(this, index)}>
				{ item.name }
			</View>)
		);
  }
  getRandomColor = function () {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
  }
	getRowKey = (index) => {
		return this.state.dataSource[index].path;
	}
	render () {
		const { dataSource = [] } = this.state;
		return (
			<ListView style={[styles.container, {
				paddingTop: this.state.offsetTop
			}]}
				ref={this.listRef}
				showScrollIndicator={false}
				numberOfRows={dataSource.length}
				renderRow={this.getRenderRow}
				getRowKey={this.getRowKey}
				getRowStyle={() => ({ flex: 1 })}
			/>
		);
	}
	initNodeCache () {
		let cacheNodeList = []
		this.listItem.forEach((item, index) => {
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
		let { height } = Dimensions.get('window');
		let {dataSource, cacheNodeList} = this.state
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

export default withRouter(Entry);
