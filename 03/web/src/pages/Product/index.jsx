import React from 'react';
import { Container, Description, Price, ProductImage, ProductItens, Title } from './styles';

export default function Product(props) {
    return (
        <Container>
            <ProductImage src='https://m.media-amazon.com/images/I/81YNIGDPx7L._AC_SL1500_.jpg' alt='Product' />

            <ProductItens>
                <Title>Product Title</Title>
                <Price>R$ 60,00</Price>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Description>
            </ProductItens>
        </Container>
    )
}