import React from 'react';

import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Select from 'components/Select';

import { Container, AddButton } from './styles';
import { useCategoriesContext } from 'contexts/categories';
import { useProductsContext } from 'contexts/products';
import { useNavigate } from 'react-router-dom';
import { Windmill } from 'react-activity';

export default function ProductForm(props) {
    const navigate = useNavigate()

    const [imageUrl, setImageUrl] = React.useState('')
    const [categoryId, setCategoryId] = React.useState(null)
    const [title, setTitle] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    const { addProduct } = useProductsContext()
    const { categories } = useCategoriesContext()

    const onSubmitForm = async e => {
        setIsLoading(true)
        e.preventDefault()
        try {
            const product = await addProduct({ title, price, imageUrl, description, categoryId })
            setImageUrl(''); setCategoryId(null); setTitle(''); setPrice(''); setDescription('');
            navigate(`/product/${product.id}`)
        } catch (error) { }
        setIsLoading(false)
    }

    return (
        <Container>
            <form onSubmit={onSubmitForm}>
                <h1>Adicionar novo produto</h1>

                <Input type='text' value={imageUrl} onChange={setImageUrl} placeholder='Url da imagem' desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Select data={categories} onChange={setCategoryId} desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Input type='text' value={title} onChange={setTitle} placeholder='Nome do produto' desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Input type='number' value={price} onChange={setPrice} placeholder='Preço' desktopW='100%' tabletW='100%' mobileW='100%' required />

                <Textarea value={description} onChange={setDescription} desktopW='100%' tabletW='100%' mobileW='100%' placeholder='Descrição' required />

                <AddButton disabled={isLoading}>
                    {isLoading ? <Windmill /> : 'Adicionar produto'}
                </AddButton>
            </form>
        </Container>
    )
}