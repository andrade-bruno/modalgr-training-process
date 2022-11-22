import React from 'react';
import { NavbarStyle, SearchBar, SearchInput, Img, SearchIconMobile } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from 'theme';

export default function Navbar(params) {
    return (
        <NavbarStyle>
            <Img src='/images/logo.png' alt='Alura Geek' />
            <SearchBar>
                <SearchInput placeholder='O que deseja encontrar?' />
                <FontAwesomeIcon icon="search" color={theme.fontColor.gray} size='17px' />
            </SearchBar>
            <SearchIconMobile icon="search" color={theme.fontColor.gray} size='17px' />
        </NavbarStyle>
    )
};
