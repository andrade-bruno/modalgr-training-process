import React from 'react';
import { NavbarStyle, SearchBar, SearchInput, Img, SearchIconMobile } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from 'theme';
import { useNavigate } from 'react-router-dom';

export default function Navbar(params) {
    const navigate = useNavigate()

    return (
        <NavbarStyle>
            <Img src='/images/logo.png' alt='Alura Geek' onClick={() => navigate('/')} />
            <SearchBar>
                <SearchInput placeholder='O que deseja encontrar?' />
                <FontAwesomeIcon icon="search" color={theme.fontColor.gray} size='lg' />
            </SearchBar>
            <SearchIconMobile icon="search" color={theme.fontColor.gray} size='lg' />
        </NavbarStyle>
    )
};
