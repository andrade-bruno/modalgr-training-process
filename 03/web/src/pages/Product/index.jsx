import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Description, Price, ProductImage, ProductItens, Title } from './styles';
import productsService from 'services/productsService';
import { Spinner } from "react-activity";

export default function Product(props) {
    const params = useParams()
    const [product, setProduct] = React.useState([])

    async function getProduct() {
        const { data } = await productsService.getProduct(params.id)
        setProduct(data)
    }

    React.useEffect(() => {
        getProduct()
    }, [])

    return (
        <Container>
            {
                !product.imageUrl && !product.title && !product.price ? <Spinner style={{ margin: '20px' }} size={50} /> :
                    <>
                        <ProductImage src={product.imageUrl} alt={product.title} />

                        <ProductItens>
                            <Title>{product.title}</Title>
                            <Price>R$ {product.price.toFixed(2)}</Price>
                            <Description>
                                {product.descripton ? product.description : 'O produto ainda não contém descrição'}
                            </Description>
                        </ProductItens>
                    </>
            }
        </Container>
    )
}