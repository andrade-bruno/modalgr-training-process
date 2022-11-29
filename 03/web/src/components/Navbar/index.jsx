import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { NavbarStyle, SearchBar, SearchInput, Img, SearchIconMobile, LeftContent, ButtonNavigate } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from 'theme';
import { useProductsContext } from 'contexts/products';
import NavbarQueryList from 'components/NavbarQueryList';

export default function Navbar(props) {
    const location = useLocation()
    const pathname = location.pathname
    const navigate = useNavigate()

    const { products, searchQuery, setSearchQuery } = useProductsContext()
    const [queriedProducts, setQueriedProducts] = React.useState([])

    const handleNavigateNavBar = () => {
        return pathname === '/' ? navigate('/login') :
            pathname === '/product/new' ? navigate('/products')
                : null
    }

    React.useEffect(() => {
        if (searchQuery.length >= 3) {
            setQueriedProducts(products.filter(product => {
                return product.title.toLowerCase().includes(searchQuery.toLowerCase())
            }))
        }
    }, [searchQuery, products])


    return (
        <>
            <NavbarStyle>
                <LeftContent>
                    <Img src='/images/logo.png' alt='Alura Geek' onClick={() => navigate('/')} />
                    <SearchBar id='searchbar'>
                        <SearchInput placeholder='O que deseja encontrar?' onChange={e => setSearchQuery(e.target.value)} value={searchQuery} />
                        <FontAwesomeIcon icon="search" color={theme.fontColor.gray} size='lg' style={{ cursor: 'pointer' }} />
                    </SearchBar>
                    <NavbarQueryList visible={searchQuery.length >= 3} queriedProducts={queriedProducts} />
                </LeftContent>
                {pathname === '/' ? <ButtonNavigate onClick={handleNavigateNavBar}>Login</ButtonNavigate> :
                    pathname === '/product/new' ? <ButtonNavigate onClick={handleNavigateNavBar}>Menu administrador</ButtonNavigate>
                        : null}
                <SearchIconMobile icon="search" color={theme.fontColor.gray} size='lg' />
            </NavbarStyle>
        </>
    )


};
