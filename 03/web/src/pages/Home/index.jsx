import React from 'react';

import { Container, ContainerContent } from 'theme/common';
import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import { useCategoriesContext } from 'contexts/categories';
import { useProductsContext } from 'contexts/products';

export default function Home() {
    const { products } = useProductsContext()
    const { categories } = useCategoriesContext()

    return (
        <Container>
            <Banner />
            <ContainerContent>
                {categories.map(category => (
                    <CategorySection key={category.id} title={category.title} products={
                        products.filter(product => product.category === category.title)
                    } />
                ))}
            </ContainerContent>
        </Container>
    )
}