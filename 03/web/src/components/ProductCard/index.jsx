import React from 'react';
import { Hyperlink, ProductCardStyle } from './styles';

export default function ProductCard(props) {
    const { id, title, price, imageUrl } = props.product
    return (
        <ProductCardStyle>
            <img src={imageUrl} alt={title} />
            <p>{title}</p>
            <p className='price'>R$ {price.toFixed(2)}</p>
            <Hyperlink to={`/product/${id}`}>Ver produto</Hyperlink>
        </ProductCardStyle>
    )
}