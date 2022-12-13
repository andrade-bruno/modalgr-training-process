import styled from "styled-components";
import Button from 'components/Button'
import theme from "theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 100%;
    height: 390px;
    padding: 45px 0;
    gap: 10px;
`

export const LoginButton = styled(Button)`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.disabled ? theme.background.gray : theme.background.blue}
`