import React from 'react';
import style from './Button.module.scss'
class Button extends React.Component<{ 
    children: any,
    type?: "button" | "submit" | "reset" | undefined ,
    onClick?: () => void
}>  {
    render() {
        const { type = 'button', children, onClick } = this.props
        return (
            <button className={style.mainButton} onClick={onClick} type={type}>{children}</button>
        )
    }
}

export default Button