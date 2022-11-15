import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_Icon from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icon } from "../UI";

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <Icon src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <span className="detalhe">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="btn" onClick={toggleHandler}>
        <Icon
          style={{ marginTop: "2px" }}
          src={toggleState ? privado : olho_Icon}
          alt="Privacidade do Saldo"
        />
      </button>
    </div>
  );
};

export default Conta;
