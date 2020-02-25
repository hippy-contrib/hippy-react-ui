/**
 * TabPanel
 * 作用： tab内容的wrapper
 * 用于控制是否展示，是否渲染，是否初始化，缓存逻辑管理
 * 
 */
import React from 'react';
import { View } from '@hippy/react';

export class TabPanel extends React.Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		const { isSelected } = nextProps;
		if (!prevState.hasRender && isSelected) {
			return { hasRender: true }
		}
    return null;
	}

	constructor(props) {
		super(props);
		const { isSelected } = props;
		this.state = {
			hasRender: isSelected,
		}
	}
	render () {
		const { children, id } = this.props;
		const { hasRender } = this.state;
		return (
			<View style={{ flex: 1 }} key={id}>
				{ hasRender && children }
			</View>
		)
	}
}

export default TabPanel;
