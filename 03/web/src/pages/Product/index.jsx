import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, ProductContainer, Description, Price, ProductImage, ProductItens, Title, SimilarProducts } from './styles';
import productsService from 'services/productsService';
import { Spinner } from "react-activity";
import { useProductsContext } from 'contexts/products';
import NotFound from 'pages/NotFound';

export default function Product(props) {
    const params = useParams()
    const [product, setProduct] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false)

    const { products } = useProductsContext()
    let similarProducts = products.filter((item) => item.id !== Number(params.id))

    async function getProduct() {
        setIsLoading(true)
        try {
            const response = await productsService.getProduct(params.id)
            if (response.status === 200) {
                setProduct(response.data)
            }
        } catch (error) { }
        setIsLoading(false)
    }

    React.useEffect(() => {
        getProduct()
    }, [params])

    return (
        <Container>
            <ProductContainer>
                {
                    isLoading ? <Spinner style={{ margin: '20px' }} size={50} /> :
                        !product ? <NotFound /> :
                            <>
                                <ProductImage src={product.imageUrl} alt={product.title} />

                                <ProductItens>
                                    <Title>{product.title}</Title>
                                    <Price>R$ {Number(product.price).toFixed(2)}</Price>
                                    <Description>
                                        Descrição: {product.description ? product.description : 'O produto ainda não contém descrição'}
                                    </Description>
                                </ProductItens>
                            </>
                }
            </ProductContainer>
            <SimilarProducts title='Produtos similares' products={similarProducts} />
        </Container>
    )
}