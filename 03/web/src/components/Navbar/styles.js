import styled from 'styled-components'
import theme from 'theme'

const navHeight = '7.125rem'

export const Nav = styled.div`
    background-color: ${theme.background.white};
    display: flex;
    width: 100%;
    height: ${navHeight};
    padding: 10px;
    align-items: center;
    justify-content: flex-start;
`

export const Img = styled.img`
    margin: 0 20px 0 100px;
`

export const SearchBar = styled.div`
    background-color: ${theme.background.lightgray};
    width: 20%;
    height: ${navHeight / 2};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 10px 20px;
    gap: 20px;
`

export const SearchInput = styled.input`
    text-decoration: none;
    background: transparent;
    border: none;
    width: 100%;
    color: ${theme.fontColor.gray};
`