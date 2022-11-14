import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components'
import theme from "../UI/theme";

const Header = styled.nav`
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Cabecalho = () => {
  return (
    <Header>
      <img className="imagem-logo" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="btn-secundario" href="https://google.com">
          Ajuda
        </a>
        <a className="btn-primario" href="https://google.com">
          Sair
        </a>
      </div>
    </Header>
  );
};

export default Cabecalho;
