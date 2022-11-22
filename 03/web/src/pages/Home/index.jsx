import React from 'react';

import Banner from 'components/Banner';
import { Container, Products } from './styles';
import productsService from 'services/productsService';

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

            </Products>
        </Container>
    )
}