import React from 'react';

import { Container, Products } from './styles';
import productsService from 'services/productsService';
import Banner from 'components/Banner';
import CategorySection from 'components/CategorySection';

export default function Home() {
    const [products, setProducts] = React.useState([])
    const [categories, setCategories] = React.useState([])

    async function getProducts() {
        const { data } = await productsService.getProducts()
        setProducts(data)
    }

    async function getCategories() {
        const { data } = await productsService.getCategories()
        setCategories(data)
    }

    React.useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    return (
        <Container>
            <Banner />
            <Products>
                {categories.map(category => (
                    <CategorySection key={category.id} title={category.title} products={
                        products.filter(product => product.category === category.title)
                    } />
                ))}
            </Products>
        </Container>
    )
}