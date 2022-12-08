import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { 
	TextField,
	Button,
	Typography,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	IconButton
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

import http from '../../../services/http'
import IPrato from '../../../interfaces/IPrato'
import ITag from '../../../interfaces/ITag'
import IRestaurante from '../../../interfaces/IRestaurante'

const FormularioPrato = () => {
	const params = useParams()
	const navigate = useNavigate()

	const [tags, setTags] = React.useState<ITag[]>([])
	const [restaurantes, setRestaurantes] = React.useState<IRestaurante[]>([])
	
	const [tag, setTag] = React.useState('')
	const [restaurante, setRestaurante] = React.useState<string>('')
	const [nome, setNome] = React.useState('')
	const [descricao, setDescricao] = React.useState('')
	const [imagem, setImagem] = React.useState<File | null>(null)
	const [imagemUrl, setImagemUrl] = React.useState('') // Url oriunda do servidor, quando editando o prato

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
					setTag(res.data.tag)
					setRestaurante(String(res.data.restaurante))
					setImagemUrl(res.data.imagem)
				})
		}
	}, [params])

	const selecionaArquivo = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files?.length) {
			return setImagem(null)
		} else {
			setImagem(e.target.files[0])
			setImagemUrl('')
		}
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const Form = new FormData()
		Form.append('nome', nome)
		Form.append('tag', tag)
		Form.append('descricao', descricao)
		Form.append('restaurante', restaurante)

		if (imagem) {
			Form.append('imagem', imagem)
		}

		if (params.id) {
			http.request({
				url: `pratos/${params.id}/`,
				method: 'PUT',
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				data: Form
			}).then(() => {
				alert(`${nome} atualizado com sucesso`)
				navigate('/admin/pratos/')
			}).catch(err => {
				console.log(err)
			})
		} else {
			http.request({
				url: 'pratos/',
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				data: Form
			}).then(() => {
				alert(`${nome} cadastrado com sucesso`)
				setNome('')
				setDescricao('')
				setTag('')
				setRestaurante('')
				setImagem(null)
				setImagemUrl('')
			}).catch(err => {
				console.log(err)
			})
		}
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
			<Typography component='h1' variant='h6'>Formulário de Prato</Typography>
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
							<MenuItem key={tag.id} value={tag.value}>
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

				<IconButton color="primary" aria-label="upload de imagem" component="label">
					<input
						hidden
						accept="image/*"
						type="file"
						onChange={e => selecionaArquivo(e)}
					/>
					<PhotoCamera />
				</IconButton>

				{imagemUrl ? <b>{imagemUrl}</b> : imagem && <b>{imagem.name}</b>}

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