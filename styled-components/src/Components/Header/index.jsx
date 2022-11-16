import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from 'styled-components'
import theme from "../UI/theme";

const HeaderStyles = styled.nav`
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
`

const BtnHeader = styled.a`
    text-align: center;
    border-radius: 3px;
    padding: 5px 20px;
    margin: 0 10px;
    font-weight: 600;
    border: 2px solid white;

    background-color: ${(props) => (props.primary ? '#FFF' : theme.colors.primary )};
    color: ${(props) => (props.primary ? theme.colors.primary : '#FFF' )};
`

const Header = () => {
  return (
    <HeaderStyles>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnHeader primary href="https://google.com">
          Ajuda
        </BtnHeader>
        <BtnHeader href="https://google.com">
          Sair
        </BtnHeader>
      </div>
    </HeaderStyles>
  );
};

export default Header;
