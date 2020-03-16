import React from 'react';
import { TextInput } from '@hippy/react';

export class WebInput extends React.Component {
	render () {
		const {
			contentInset,
			onKeyboardWillShow,
			onSelectionChange,
			editable,
			multiline,
			numberOfLines,
			returnKeyType,
			...otherProps
		} = this.props;

		return (
			<TextInput
				{ ...otherProps }
				readOnly={!editable}
				rows={numberOfLines}
			/>
		)
	}
}


export default WebInput;
