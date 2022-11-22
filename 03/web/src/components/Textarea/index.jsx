import React from 'react';
import { TextareaStyle } from './styles';

export default function Textarea({ props, ...rest }) {
    return (
        <TextareaStyle {...rest} />
    )
}