import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from 'theme';
import { CategoryHeader, CategorySectionStyle, List } from './styles';

import ProductCard from 'components/ProductCard';
import Button from 'components/Button';

export default function CategorySection(props) {
    const navigate = useNavigate()
    const location = useLocation()
    let products = props.products.sort((a, b) => b.id - a.id)
    // Sort decrescent

    products = location.pathname === '/products' ? products : products.slice(0, 6)
    // Picks first 6 items, if pathname isn't /products

    return (
        props.products.length > 0 &&
        <CategorySectionStyle {...props}>
            <CategoryHeader>
                <h1>{props.title}</h1>
                {
                    location.pathname === '/' ?
                        <Link to='/products'>Ver tudo <FontAwesomeIcon icon='arrow-right' size='lg' color={theme.fontColor.primary} /></Link>
                        : location.pathname === '/products' ?
                            <Button style={{ fontSize: '16px' }} onClick={() => navigate('/product/new')} >Adicionar produto</Button>
                            : null
                }
            </CategoryHeader>
            <List>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </List>
        </CategorySectionStyle>
    )
}