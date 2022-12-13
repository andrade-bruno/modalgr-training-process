import React from 'react';
import { Hyperlink, ProductCardStyle, Icon, Icons } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProductsContext } from 'contexts/products';

export default function ProductCard(props) {
    const { id, title, price, imageUrl } = props.product
    const { deleteProduct } = useProductsContext()
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <ProductCardStyle>
            <Icons pathname={location.pathname}>
                <Icon icon="trash" size='lg' onClick={() => deleteProduct({ id, title })} />
                <Icon icon="pencil" size='lg' onClick={() => navigate('/product/new', { state: props.product })} />
            </Icons>
            <img src={imageUrl} alt={title} />
            <p>{title}</p>
            <p className='price'>R$ {Number(price).toFixed(2)}</p>
            <Hyperlink to={`/product/${id}`}>Ver produto</Hyperlink>
        </ProductCardStyle>
    )
}