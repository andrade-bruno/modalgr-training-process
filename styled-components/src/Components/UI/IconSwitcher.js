import React from "react";
import { Icon } from "./index";

import food from '../../assets/images/alimentacao.svg'
import utilities from '../../assets/images/utilidades.svg'
import health from '../../assets/images/saude.svg'
import transport from '../../assets/images/transporte.svg'
import other from '../../assets/images/outros.svg'

const IconSwitcher = ({type}) => {
    const Images = {
      Food: <Icon src={food} alt='Food' />,
      Utilities: <Icon src={utilities} alt='Utilities' />,
      Health: <Icon src={health} alt='Health' />,
      Transport: <Icon src={transport} alt='Transport' />,
      default: <Icon src={other} alt='Other' />
    }

    return Images[type] || Images.default
}

export default IconSwitcher
