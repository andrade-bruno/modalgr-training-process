import styled from "styled-components";
import theme from "theme";

export const ButtonStyle = styled.button`
    background: ${theme.background.blue};
    border: none;
    padding: 12px 16px;
    color: ${theme.fontColor.white};
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    outline: none;

    @media (min-width: 768px) {
        width: ${(props) => props.desktopW ? props.desktopW : ''}
    }
    @media (max-width: 768px) {
        width: ${(props) => props.tabletW ? props.tabletW : ''}
    }
    @media (max-width: 360px) {
        width: ${(props) => props.mobileW ? props.mobileW : ''}
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0px 15px 20px rgba(42, 122, 228, 0.4);
    }
`