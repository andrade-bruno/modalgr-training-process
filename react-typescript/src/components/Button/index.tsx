import React from 'react';
import style from './Button.module.scss'

interface ButtonProps {
    children: any,
    type?: "button" | "submit" | "reset" | undefined ,
    onClick?: () => void
}

const Button = (props: ButtonProps) => {
    const { type = 'button', children, onClick } = props
    return (
        <button className={style.mainButton} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button