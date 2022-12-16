import {
	TextField
} from '@mui/material'
import React from 'react'

interface InputProps {
	label: string,
	defaultValue?: string,
	required?: boolean,
	fullWidth?: boolean,
	type: string,
	value: string | number,
	setter: React.Dispatch<React.SetStateAction<string>>
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