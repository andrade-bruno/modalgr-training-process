import styled from "styled-components";
import theme from "theme";

export const NavbarQueryListStyle = styled.div`
    display: ${(props) => props.visible && props.productsLenght >= 0 ? 'block' : 'none'};
    position: absolute;
    top: ${(props) => props.navbarCoordinates.top}px;
    padding: ${(props) => props.navbarCoordinates.height + 10}px 10px 10px 10px;
    left: ${(props) => props.navbarCoordinates.left}px;
    border-radius: 20px;
    min-width: ${(props) => props.navbarCoordinates.width}px;
    background: rgba(42, 122, 228, 0.85);
    color: ${theme.fontColor.white};
    max-height: 140px;
    overflow: hidden;
    z-index: 10;
    box-sizing: border-box;

    > p {
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
            color: ${theme.fontColor.dark}
        }
    }
`