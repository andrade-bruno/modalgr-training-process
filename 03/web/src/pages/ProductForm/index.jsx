import Input from 'components/Input';
import Textarea from 'components/Textarea';
import React from 'react';
import { Container, AddButton } from './styles';

export default function ProductForm(props) {
    const [imgUrl, setImgUrl] = React.useState('')
    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState(null)
    const [description, setDescription] = React.useState('')

    return (
        <Container>
            <form>
                <h1>Adicionar novo produto</h1>
                <Input type='text' value={imgUrl} onChange={setImgUrl} placeholder='Url da imagem' desktopW='100%' tabletW='100%' mobileW='100%' required />
                <Input type='text' value={name} onChange={setName} placeholder='Nome do produto' desktopW='100%' tabletW='100%' mobileW='100%' required />
                <Input type='number' value={price} onChange={setPrice} placeholder='Preço' desktopW='100%' tabletW='100%' mobileW='100%' required />
                <Textarea value={description} onChange={setDescription} desktopW='100%' tabletW='100%' mobileW='100%' placeholder='Descrição' required />
                <AddButton sty>Adicionar produto</AddButton>
            </form>
        </Container>
    )
}