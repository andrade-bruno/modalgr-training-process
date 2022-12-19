import React from 'react'

import {
	TextField
} from '@mui/material'

interface InputProps {
	label: string,
	defaultValue?: string,
	required?: boolean,
	fullWidth?: boolean,
	type: string,
	value: string | number | undefined,
	setter: (e: any) => void
}

const Input = ({
	label,
	defaultValue,
	required,
	fullWidth,
	type,
	value,
	setter
}: InputProps) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setter(event.target.value)
	}
	
	return (
		<TextField
			error={false}
			id='outlined-error-helper-text'
			label={label}
			defaultValue={defaultValue}
			required={required}
			fullWidth={fullWidth}
			margin='normal'
			type={type}
			value={value}
			onChange={(e) => handleChange(e)}
		/>
	)
}

export default Input