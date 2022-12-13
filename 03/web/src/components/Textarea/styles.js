import styled from "styled-components";
import theme from "theme";

export const TextareaStyle = styled.textarea`
    background: ${theme.background.white};
    border: none;
    border-bottom: solid 1px #C8C8C8;
    color: ${theme.fontColor.gray};
    padding: 12px;
    height: 82px;

    @media (min-width: 768px) {
        width: ${(props) => props.desktopW ? props.desktopW : ''}
    }
    @media (max-width: 768px) {
        width: ${(props) => props.tabletW ? props.tabletW : ''}
    }
    @media (max-width: 360px) {
        width: ${(props) => props.mobileW ? props.mobileW : ''}
    }
`