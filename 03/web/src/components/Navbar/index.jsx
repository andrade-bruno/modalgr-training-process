import React from 'react';
import { NavbarStyle, SearchBar, SearchInput, Img, SearchIconMobile, LeftContent, ButtonNavigate } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from 'theme';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar(props) {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()

    const handleNavigateNavBar = () => {
        return pathname === '/' ? navigate('/login') :
            pathname === '/product/new' ? navigate('/products')
                : null
    }

    return (
        <NavbarStyle>
            <LeftContent>
                <Img src='/images/logo.png' alt='Alura Geek' onClick={() => navigate('/')} />
                <SearchBar>
                    <SearchInput placeholder='O que deseja encontrar?' />
                    <FontAwesomeIcon icon="search" color={theme.fontColor.gray} size='lg' style={{ cursor: 'pointer' }} />
                </SearchBar>
            </LeftContent>
            {pathname === '/' ? <ButtonNavigate onClick={handleNavigateNavBar}>Login</ButtonNavigate> :
                pathname === '/product/new' ? <ButtonNavigate onClick={handleNavigateNavBar}>Menu administrador</ButtonNavigate>
                    : null}
            <SearchIconMobile icon="search" color={theme.fontColor.gray} size='lg' />
        </NavbarStyle>
    )
};
