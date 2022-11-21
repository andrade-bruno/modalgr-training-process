import React from 'react';
import { Nav, SearchBar, SearchInput, Img } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from 'theme';

export default function Navbar(params) {
    return (
        <Nav>
            <Img src='/images/logo.png' alt='Alura Geek' />
            <SearchBar>
                <SearchInput placeholder='O que deseja encontrar?' />
                <FontAwesomeIcon icon="search" color={theme.fontColor.gray} />
            </SearchBar>
        </Nav>
    )
};
