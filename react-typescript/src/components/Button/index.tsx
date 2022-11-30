import React from 'react';
import style from './Button.module.scss'
class Button extends React.Component<{ title: string, onClick: () => void }>  {
    render() {
        return (
            <button className={style.mainButton} onClick={this.props.onClick}>{this.props.title}</button>
        )
    }
}

export default Button