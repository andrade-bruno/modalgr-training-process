import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, ProductContainer, Description, Price, ProductImage, ProductItens, Title, SimilarProducts } from './styles';
import productsService from 'services/productsService';
import { Spinner } from "react-activity";
import { useProductsContext } from 'contexts/products';

export default function Product(props) {
    const params = useParams()
    const [product, setProduct] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const { products } = useProductsContext()
    let similarProducts = products.filter((item) => item.id !== Number(params.id))

    async function getProduct() {
        setIsLoading(true)
        const { data } = await productsService.getProduct(params.id)
        setProduct(data)
        setIsLoading(false)
    }

    React.useEffect(() => {
        getProduct()
    }, [params])

    return (
        <Container>
            <ProductContainer>
                {
                    !product.imageUrl || isLoading ? <Spinner style={{ margin: '20px' }} size={50} /> :
                        <>
                            <ProductImage src={product.imageUrl} alt={product.title} />

                            <ProductItens>
                                <Title>{product.title}</Title>
                                <Price>R$ {product.price.toFixed(2)}</Price>
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