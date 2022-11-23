import React from 'react';

import ProductCard from 'components/ProductCard';
import { CategorySectionStyle, List } from './styles';

export default function CategorySection(props) {
    return (
        <CategorySectionStyle>
            <h1>{props.title}</h1>
            <List>
                {props.products.map(product => (
                    <ProductCard product={product} />
                ))}
            </List>
        </CategorySectionStyle>
    )
}