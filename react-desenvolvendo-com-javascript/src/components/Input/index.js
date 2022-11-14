import React from 'react';
import './index.css';

export default function Input(props) {
    const { name, type, placeholder, required, onChange, value } = props;

    const handleValue = e => {
        onChange(e.target.value);
    };

    return (
        <div className='field'>
            <label>{name}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={handleValue}
                value={value}
            />
        </div>
    );
}
