import styled from 'styled-components'
import theme from 'theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/Button';

const navHeight = '7.125rem'

export const NavbarStyle = styled.div`
    background-color: ${theme.background.white};
    display: flex;
    height: ${navHeight};
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 768px) {
        padding: 10px 152px;
        gap: 32px;
    }
    @media (max-width: 768px) {
        padding: 10px 32px;
        gap: 32px;
    }
    @media (max-width: 360px) {
        padding: 10px 16px;
        gap: 16px;
        justify-content: space-between;
    }
`

export const LeftContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;

    @media (min-width: 768px) {
        gap: 32px;
    }
    @media (max-width: 768px) {
        gap: 32px;
    }
    @media (max-width: 360px) {
        gap: 16px;
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
        max-width: 394px;
    }
    @media (max-width: 768px) {
        max-width: 272px;
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ButtonNavigate = styled(Button)`
    background: transparent;
    color: ${theme.fontColor.primary};
    border: 1px solid ${theme.background.blue};
    box-shadow: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 360px) {
        font-size: 14px;
    }

    &:hover {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    }
`

export const SearchIconMobile = styled(FontAwesomeIcon)`
    display: none;
    cursor: pointer;

    @media (max-width: 360px) {
        display: block;
    }
`