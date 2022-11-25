import React from 'react';
import { SelectStyle } from './styles';

export default function Select(props) {
    return (
        <SelectStyle {...props} onChange={e => props.onChange(e.target.value)}>
            <option key='default' value=''>
                Selecione
            </option>
            {props.data.map((item, idx) => (
                <option key={idx} value={item.title ? item.title : item.value}>
                    {item.title ? item.title : item.value}
                </option>
            ))}
        </SelectStyle>
    )
}