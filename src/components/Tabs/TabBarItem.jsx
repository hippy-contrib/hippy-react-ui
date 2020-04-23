import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import { TabBarItemPropTypes, TabBarItemDefaultProps } from './props';
import Text from '../Text';

const styles = StyleSheet.create({
	item: {
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
		console.log('TabBarItem', style);
		const isComp = React.isValidElement(title);

		if (isComp) {
			return (
				<View onLayout={onLayout}>
					{ React.cloneElement(title, { selected, height: 36 }) }
				</View>
			);
		} else {
			return (
				<Text
					style={[{ ...styles.item, color }, style]}
					onClick={onClick}
					onLayout={onLayout}
					numberOfLines={1}
				>{title}
				</Text>
			);
		}
	}
}

TabBarItem.propTypes = TabBarItemPropTypes;
TabBarItem.defaultProps = TabBarItemDefaultProps;

export default TabBarItem;
