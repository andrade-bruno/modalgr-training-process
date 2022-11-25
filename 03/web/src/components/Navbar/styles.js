import styled from 'styled-components'
import theme from 'theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navHeight = '7.125rem'

export const NavbarStyle = styled.div`
    background-color: ${theme.background.white};
    display: flex;
    height: ${navHeight};
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 32px;

    @media (min-width: 768px) {
        padding: 10px 152px;
    }
    @media (max-width: 768px) {
        padding: 10px 32px;
    }
    @media (max-width: 360px) {
        padding: 10px 16px;
        justify-content: space-between;
    }

`

export const Img = styled.img`
    @media (min-width: 768px) {
        width: 176px;
        height: 50px;
    }
    @media (max-width: 768px) {
        width: 100px;
        height: 28px;
    }
    @media (max-width: 360px) {
        width: 100px;
        height: 28px;
    }

    &:hover {
        transform: translateY(-4px);
        cursor: pointer;
    }
`

export const SearchBar = styled.div`
    background-color: ${theme.background.lightgray};
    height: ${navHeight / 2};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 10px 20px;
    gap: 20px;

    @media (min-width: 768px) {
        width: 394px;
    }
    @media (max-width: 768px) {
        width: 272px;
    }
    @media (max-width: 360px) {
        display: none;
    }
`

export const SearchInput = styled.input`
    text-decoration: none;
    background: transparent;
    border: none;
    width: 100%;
    color: ${theme.fontColor.gray};
`

export const SearchIconMobile = styled(FontAwesomeIcon)`
    display: none;

    @media (max-width: 360px) {
        display: block;
    }
`