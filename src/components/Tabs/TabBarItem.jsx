import React from 'react';
import { StyleSheet } from '@hippy/react';
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
		const isComp = React.isValidElement(title);

		if (isComp) {
			return React.cloneElement(title, { selected, height: 36 });
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
