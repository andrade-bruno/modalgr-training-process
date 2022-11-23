import React from 'react';

import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import { useProductsContext } from 'contexts/products';

import { Container, ContainerContent } from 'theme/common';

export default function Products(props) {
    const { products } = useProductsContext()
    return (
        <Container>
            <Banner />
            <ContainerContent>
                <CategorySection key={1} title={'Todos os produtos'} products={products} />
            </ContainerContent>
        </Container>
    )
}