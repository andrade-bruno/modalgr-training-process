import React from 'react';
import style from './Button.module.scss'
class Button extends React.Component<{ children: any, onClick?: () => void }>  {
    render() {
        return (
            <button className={style.mainButton} onClick={this.props.onClick}>{this.props.children}</button>
        )
    }
}

export default Button