import React from 'react';
import { View, StyleSheet } from '@hippy/react';
import PropTypes from 'prop-types';
import { LayoutableProps, ClickableProps, DefaultLayoutableProps, DefaultClickableProps } from '../../types/event';
import { titleProps } from './props';
import { COLOR } from './props';

const styles = StyleSheet.create({
	item: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		height: 36,
		lineHeight: 36,
	}
})

export class TabBarItem extends React.Component {
	render () {
		const { title, color, onClick, onLayout, selected } = this.props;
		const isComp = React.isValidElement(title);
		return (
			<View
			style={{ ...styles.item, color }}
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

TabBarItem.propTypes = {
	...ClickableProps,
	...LayoutableProps,
	color: PropTypes.string,
	title: titleProps,
	selected: PropTypes.bool,
}

TabBarItem.defaultProps = {
	...DefaultClickableProps,
	...DefaultLayoutableProps,
	title: '',
	color: COLOR.textColor,
	selected: false,
}

export default TabBarItem;
