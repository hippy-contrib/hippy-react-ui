import React from 'react';
import { Dimensions } from '@hippy/react';

import { flattenStyle } from '../../utils';

const WINDOWSIZE = Dimensions.get('window');
const STATUSBARHEIGHT = WINDOWSIZE.statusBarHeight; 

export const StatusBarWrapper = ({ props, children }) => {
	if (!React.Children.only(children)) {
		console.warn('StatusBarWrapper only has one child');
		return children;
	}

	const style = flattenStyle(children.props.style || {});
	const wrapperStyle = {
		paddingTop: ( style.paddingTop || 0 ) + STATUSBARHEIGHT
	};
	style.height && (wrapperStyle.height = STATUSBARHEIGHT + style.height);
	return (
		<children.type {...children.props} {...props} style={{ ...style, ...wrapperStyle }}>
		</children.type>
	);
}

export default StatusBarWrapper;
