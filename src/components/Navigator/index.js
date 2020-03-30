import React from 'react';
import { StyleSheet, View } from '@hippy/react';
import Text from '../Text';

import StatusBarWrapper from './StatusBarWrapper';
import { NavigatorPropTypes, NavigatorDefaultProps } from './props';
import { flattenStyle } from '../../utils';
import Icon from '../Icon';
import { stopPropagation } from '../../utils/event';

import BlueBack from '../../../assets/ios-back-blue.png';

const navigatorHeight = 65;
const PADDINGTOP = 20;
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: navigatorHeight,
		position: 'relative',
		backgroundColor: '#ffffff',
		paddingTop: PADDINGTOP,
		// backgroundColor: color.whitebackgroundColor,
	},
	leftContainer: {
		position: 'absolute',
		left: 22,
		bottom: 0,
		width: 100,
		height: navigatorHeight,
		alignItems: 'flex-start',
		paddingTop: PADDINGTOP,
		justifyContent: 'center',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 22,
	},
	rightContainer: {
		position: 'absolute',
		right: 22,
		bottom: 0,
		width: 100,
		height: navigatorHeight,
		alignItems: 'flex-end',
		paddingTop: PADDINGTOP,
		justifyContent: 'center',
	},
})

export class Navigator extends React.Component {

	handleLeftClick (event) {
		console.log('fuck');
		this.props.onLeftClick(event);
		return stopPropagation(event);
	}
	renderLeft () {
		const { back, leftContent } = this.props;
		const backContent = <Icon size='xs' onClick={event => this.handleLeftClick(event)} source={BlueBack} />

		const body = React.isValidElement(leftContent) ? leftContent : <Text size='sm' >{ leftContent }</Text>;

		return (
			<View style={styles.leftContainer}>
				{
					back ? backContent : body
				}
			</View>
		);
	}

	renderRight () {
		const { rightContent } = this.props;
		return (
			<View style={styles.rightContainer}>
				{
					React.isValidElement(rightContent) ? rightContent : <Text size='sm' >{ rightContent }</Text>
				}
			</View>
		);
	}

	renderTitle () {
		const { title, titleStyle, titleTextStyle } = this.props;
		return (
			<View style={[ styles.titleContainer, flattenStyle(titleStyle)]}>
				{
					React.isValidElement(title) ? title : <Text size='md' style={titleTextStyle} >{ title }</Text>
				}
			</View>
		);
	}
	renderItem (pos, customContent) {
		const style = [ styles[`${pos}Container`], flattenStyle(this.props[`${pos}Style`] || {}) ];
		const body = this.props[pos];
		return (
			<View style={style}>
				{
					customContent ||
					(!React.isValidElement(body) ?
						<Text style={this.props[`${pos}TextStyle`] || {}} >{ body }</Text> :
						body)
				}
			</View>
		)
	}
	render () {
		const { containerStyle, transparent } = this.props;
		return (
			<StatusBarWrapper>
				<View style={[ styles.container, transparent ? { backgroundColor: 'transparent' } : {}, flattenStyle(containerStyle)]}>
					{
						this.renderTitle()
					}
					{
						this.renderLeft()
					}
					{
						this.renderRight()
					}
				</View>
			</StatusBarWrapper>
		);
	}
}

Navigator.propTypes = NavigatorPropTypes;
Navigator.defaultProps = NavigatorDefaultProps;

export default Navigator;
