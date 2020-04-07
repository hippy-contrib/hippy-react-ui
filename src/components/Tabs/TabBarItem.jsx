import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import { TabBarItemPropTypes, TabBarItemDefaultProps } from './props';

const styles = StyleSheet.create({
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: 36,
		lineHeight: 36,
		minWidth: 56,
		paddingHorizontal: 8,
	}
})

export class TabBarItem extends React.Component {
	render () {
		const { title, color, onClick, onLayout, selected, style } = this.props;
		const isComp = React.isValidElement(title);
		return (
			<View
			style={[{ ...styles.item, color }, style]}
			onClick={onClick}
			onLayout={onLayout}
		>
			{
				isComp ? React.cloneElement(title, { selected }) : title
			}
		</View>
		)
	}
}

TabBarItem.propTypes = TabBarItemPropTypes;
TabBarItem.defaultProps = TabBarItemDefaultProps;

export default TabBarItem;
