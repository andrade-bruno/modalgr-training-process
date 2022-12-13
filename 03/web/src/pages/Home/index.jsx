import React from 'react';

import { Container, ContainerContent } from 'theme/common';
import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import { useCategoriesContext } from 'contexts/categories';
import { useProductsContext } from 'contexts/products';
import { Spinner } from 'react-activity';

export default function Home() {
    const { products } = useProductsContext()
    const { categories } = useCategoriesContext()

    return (
        <Container>
            <Banner />
            <ContainerContent>
                {
                    products.length <= 0 && categories.length <= 0 ? <Spinner size={50} /> :
                        categories.map(category => (
                            <CategorySection key={category.id} title={category.title} products={
                                products.filter(product => product.categoryId === category.id)
                            } />
                        ))
                }
            </ContainerContent>
        </Container>
    )
}