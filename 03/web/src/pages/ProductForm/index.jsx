import React from 'react';

import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Select from 'components/Select';

import { Container, AddButton } from './styles';
import { useCategoriesContext } from 'contexts/categories';
import { useProductsContext } from 'contexts/products';
import { useLocation, useNavigate } from 'react-router-dom';
import { Windmill } from 'react-activity';

export default function ProductForm(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state
    // State: Editing an existing product

    const [imageUrl, setImageUrl] = React.useState(state.imageUrl ? state.imageUrl : '')
    const [categoryId, setCategoryId] = React.useState(state.categoryId ? state.categoryId : null)
    const [title, setTitle] = React.useState(state.title ? state.title : '')
    const [price, setPrice] = React.useState(state.price ? state.price : '')
    const [description, setDescription] = React.useState(state.description ? state.description : '')
    const [isLoading, setIsLoading] = React.useState(false)

    const { addProduct, updateProduct } = useProductsContext()
    const { categories } = useCategoriesContext()

    const onSubmitForm = async e => {
        setIsLoading(true)
        e.preventDefault()
        try {
            let product
            if (state) {
                product = await updateProduct({ title, price, imageUrl, description, categoryId, id: state.id })
            } else {
                product = await addProduct({ title, price, imageUrl, description, categoryId })
            }

            navigate(`/product/${product.id}`)
            setImageUrl(''); setCategoryId(null); setTitle(''); setPrice(''); setDescription('');
        } catch (error) { }
        setIsLoading(false)
    }

    return (
        <Container>
            <form onSubmit={onSubmitForm}>
                <h1>{state.id ? 'Editar produto' : 'Adicionar novo produto'}</h1>

                <Input type='text' value={imageUrl} onChange={setImageUrl} placeholder='Url da imagem' desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Select data={categories} selected={categoryId} onChange={setCategoryId} desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Input type='text' value={title} onChange={setTitle} placeholder='Nome do produto' desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Input type='number' value={price} onChange={setPrice} placeholder='Preço' desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Textarea value={description} onChange={setDescription} desktopW='100%' tabletW='100%' mobileW='100%' placeholder='Descrição' required />

                <AddButton disabled={isLoading}>
                    {isLoading ? <Windmill /> : state.id ? 'Editar Produto' : 'Adicionar produto'}
                </AddButton>
            </form>
        </Container>
    )
}