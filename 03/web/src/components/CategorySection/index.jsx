import React from 'react';

import ProductCard from 'components/ProductCard';
import { CategorySectionStyle, List } from './styles';
import { useLocation } from 'react-router-dom';

export default function CategorySection(props) {
    const location = useLocation()
    let products = props.products.sort((a, b) => b.id - a.id)
    // Sort decrescent

    products = location.pathname === '/products' ? products : products.slice(0, 6)
    // Picks first 6 items, if pathname isn't /products

    return (
        props.products.length > 0 &&
        <CategorySectionStyle>
            <h1>{props.title}</h1>
            <List>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </List>
        </CategorySectionStyle>
    )
}