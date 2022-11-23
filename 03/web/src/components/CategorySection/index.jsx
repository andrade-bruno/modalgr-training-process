import React from 'react';

import ProductCard from 'components/ProductCard';
import { CategorySectionStyle, List } from './styles';

export default function CategorySection(props) {
    return (
        props.products.length > 0 &&
        <CategorySectionStyle>
            <h1>{props.title}</h1>
            <List>
                {props.products
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 6)
                    .map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                {/* Sort decrescent, picks first 6 items */}
            </List>
        </CategorySectionStyle>
    )
}