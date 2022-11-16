import React from "react";
import ThemeOn from '../../assets/images/themeOn.svg'
import ThemeOff from '../../assets/images/themeOff.svg'
import { Icon } from "./index";

export const IconTheme = ({isDark}) => {
    return isDark === true ? <Icon src={ThemeOff} alt='Dark' />
    : <Icon src={ThemeOn} alt='Light' />
}

export default IconTheme
