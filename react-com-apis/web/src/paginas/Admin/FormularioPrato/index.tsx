import React from 'react'
import { useParams } from 'react-router-dom'

import { 
	TextField,
	Button,
	Typography,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from '@mui/material'

import http from '../../../services/http'
import IPrato from '../../../interfaces/IPrato'
import ITag from '../../../interfaces/ITag'
import IRestaurante from '../../../interfaces/IRestaurante'

const FormularioPrato = () => {
	const params = useParams()

	const [tags, setTags] = React.useState<ITag[]>([])
	const [tag, setTag] = React.useState('')
	const [restaurantes, setRestaurantes] = React.useState<IRestaurante[]>([])
	const [restaurante, setRestaurante] = React.useState('')

	const [nome, setNome] = React.useState('')
	const [descricao, setDescricao] = React.useState('')
	const [imagem, setImagem] = React.useState<File | null>(null)

	React.useEffect(() => {
		http.get<{tags: ITag[]}>('tags/')
			.then(res => setTags(res.data.tags))
		http.get<IRestaurante[]>('restaurantes/')
			.then(res => setRestaurantes(res.data))
	}, [])
	
	React.useEffect(() => {
		if (params.id) {
			http.get<IPrato>(`pratos/${params.id}/`)
				.then(res => {
					setNome(res.data.nome)
					setDescricao(res.data.descricao)
				})
		}
	}, [params])

	const selecionaArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
		return (e.target.files?.length) ? setImagem(e.target.files[0]) : setImagem(null)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (params.id) {
			http.put(`pratos/${params.id}/`, { nome })
				.then(() => {
					alert(`${nome} atualizado com sucesso`)
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			http.post('pratos/', { nome })
				.then(() => {
					alert(`${nome} cadastrado com sucesso`)
					setNome('')
					setDescricao('')
				})
				.catch(err => {
					console.log(err)
				})
		}
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
			<Typography component='h1' variant='h6'>Formulário de Pratos</Typography>
			<Box
				component='form'
				onSubmit={handleSubmit}
				sx={{ width: '100%' }}
			>
				<TextField 
					label="Nome"
					variant="outlined"
					value={nome}
					fullWidth
					required
					onChange={e => setNome(e.target.value)}
					margin='dense'
				/>

				<TextField 
					label="Descrição"
					variant="outlined"
					value={descricao}
					fullWidth
					required
					onChange={e => setDescricao(e.target.value)}
					margin='dense'
				/>

				<FormControl
					margin='dense'
					fullWidth
				>
					<InputLabel id='select-tag'>Tag</InputLabel>
					<Select
						labelId='select-tag'
						value={tag}
						onChange={e => setTag(e.target.value)}
					>
						{tags.map(tag => (
							<MenuItem key={tag.id} value={tag.id}>
								{tag.value}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl
					margin='dense'
					fullWidth
				>
					<InputLabel id='select-restaurante'>Restaurante</InputLabel>
					<Select
						labelId='select-restaurante'
						value={restaurante}
						onChange={e => setRestaurante(e.target.value)}
					>
						{restaurantes.map(item => (
							<MenuItem key={item.id} value={item.id}>
								{item.nome}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<input
					type='file'
					onChange={e => selecionaArquivo(e)}
				/>

				<Button 
					variant='outlined'
					type='submit'
					fullWidth
					sx={{ marginTop: 2 }}
				>
					Salvar
				</Button>
			</Box>
		</Box>
	)       
}

export default FormularioPrato