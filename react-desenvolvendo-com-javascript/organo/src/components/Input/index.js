import React from 'react';
import './index.css';

export default function Input(props) {
    const { name, type, placeholder } = props;

    return (
        <>
            <div className='field'>
                <label>{name}</label>
                <input name={name} type={type} placeholder={placeholder} />
            </div>
        </>
    );
}
