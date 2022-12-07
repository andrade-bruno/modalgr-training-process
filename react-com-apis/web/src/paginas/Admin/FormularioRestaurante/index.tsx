import React from 'react'
import { useParams } from 'react-router-dom'
import { TextField, Button, Typography, Box } from '@mui/material'
import IRestaurante from '../../../interfaces/IRestaurante'
import http from '../../../services/http'

const FormularioRestaurante = () => {
	const params = useParams()
	const [nome, setNome] = React.useState('')

	React.useEffect(() => {
		if (params.id) {
			http.get<IRestaurante>(`restaurantes/${params.id}/`)
				.then(res => {
					setNome(res.data.nome)
				})
		}
	}, [params])

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (params.id) {
			http.put(`restaurantes/${params.id}/`, { nome })
				.then(() => {
					alert(`${nome} atualizado com sucesso`)
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			http.post('restaurantes/', { nome })
				.then(() => {
					alert(`${nome} cadastrado com sucesso`)
					setNome('')
				})
				.catch(err => {
					console.log(err)
				})
		}
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Typography component='h1' variant='h6'>Formulário de Restaurantes</Typography>
			<Box component='form' onSubmit={handleSubmit}>
				<TextField 
					label="Nome"
					variant="outlined"
					value={nome}
					fullWidth
					required
					onChange={e => setNome(e.target.value)}
					sx={{ marginTop: 4}}
				/>
				<Button 
					variant='outlined'
					type='submit'
					fullWidth
					sx={{ marginTop: 2}}
				>
					Salvar
				</Button>
			</Box>
		</Box>
	)       
}

export default FormularioRestaurante