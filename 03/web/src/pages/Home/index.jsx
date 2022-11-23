import React from 'react';

import { Container, ContainerContent } from 'theme/common';
import productsService from 'services/productsService';
import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';
import { useCategoriesContext } from 'contexts/categories';

export default function Home() {
    const [products, setProducts] = React.useState([])
    const { categories } = useCategoriesContext()

    async function getProducts() {
        const { data } = await productsService.getProducts()
        setProducts(data)
    }

    React.useEffect(() => {
        getProducts()
    }, [])

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