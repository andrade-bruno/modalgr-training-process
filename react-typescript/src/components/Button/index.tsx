import React from 'react';
import style from './Button.module.scss'
class Button extends React.Component<{ children: any, type?: any, onClick?: () => void }>  {
    render() {
        return (
            <button className={style.mainButton} onClick={this.props.onClick} type={this.props.type}>{this.props.children}</button>
        )
    }
}

export default Button