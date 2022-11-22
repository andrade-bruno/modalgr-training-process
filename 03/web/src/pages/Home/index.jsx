import React from 'react';

import { Container, Products } from './styles';
import productsService from 'services/productsService';
import Banner from 'components/Banner';
import ProductCard from 'components/ProductCard';

export default function Home() {
    const [products, setProducts] = React.useState([])

    async function getProducts() {
        const { data } = productsService.getProducts()
        setProducts(data)
        console.log(data)
    }

    React.useEffect(() => {
        getProducts()
    }, [])

    return (
        <Container>
            <Banner />
            <Products>
                <ProductCard product={{ id: 1, title: 'Title 1', price: 10, imageUrl: 'https://github.com/andrade-bruno.png', category: 'Star Wars' }} />
            </Products>
        </Container>
    )
}