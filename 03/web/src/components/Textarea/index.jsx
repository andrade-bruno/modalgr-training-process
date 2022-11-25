import React from 'react';
import { TextareaStyle } from './styles';

export default function Textarea({ props, onChange, ...rest }) {
    return (
        <TextareaStyle {...rest} onChange={e => onChange(e.target.value)} />
    )
}