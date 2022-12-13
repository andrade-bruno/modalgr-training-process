import React from 'react';
import { InputStyles } from './styles';

export default function Input(props) {
    return (
        <InputStyles {...props} onChange={e => props.onChange(e.target.value)} />
    )
}