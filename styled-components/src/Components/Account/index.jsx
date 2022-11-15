import React, { useState } from "react";
import styled from 'styled-components'

import privateIcon from "../../assets/images/privado.svg";
import eyeIcon from "../../assets/images/olho.svg";
import moneyIcon from "../../assets/images/dinheiro.svg";

import { Icon, Box, Button, Balance, Detail } from "../UI";

const IconMargin = styled(Icon)`
  margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={moneyIcon} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privateIcon : eyeIcon}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
