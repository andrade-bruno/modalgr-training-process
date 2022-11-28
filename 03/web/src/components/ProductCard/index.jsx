import React from 'react';
import { Hyperlink, ProductCardStyle, Icon, Icons } from './styles';
import { useLocation } from 'react-router-dom';
import { useProductsContext } from 'contexts/products';

export default function ProductCard(props) {
    const { id, title, price, imageUrl } = props.product
    const { deleteProduct } = useProductsContext()
    const location = useLocation()

    return (
        <ProductCardStyle>
            <Icons pathname={location.pathname}>
                <Icon icon="trash" size='lg' onClick={() => deleteProduct(id)} />
                <Icon icon="pencil" size='lg' />
            </Icons>
            <img src={imageUrl} alt={title} />
            <p>{title}</p>
            <p className='price'>R$ {price.toFixed(2)}</p>
            <Hyperlink to={`/product/${id}`}>Ver produto</Hyperlink>
        </ProductCardStyle>
    )
}