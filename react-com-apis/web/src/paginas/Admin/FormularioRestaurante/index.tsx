import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import IRestaurante from '../../../interfaces/IRestaurante'

const FormularioRestaurante = () => {
	const params = useParams()
	const [nome, setNome] = React.useState('')

	React.useEffect(() => {
		if (params.id) {
			axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${params.id}/`)
				.then(res => {
					setNome(res.data.nome)
				})
		}
	}, [params])

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (params.id) {
			axios.put(`http://localhost:8000/api/v2/restaurantes/${params.id}/`, { nome })
				.then(() => {
					alert(`${nome} atualizado com sucesso`)
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			axios.post('http://localhost:8000/api/v2/restaurantes/', { nome })
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
		<form onSubmit={handleSubmit}>
			<TextField 
				label="Nome"
				variant="outlined"
				value={nome}
				onChange={e => setNome(e.target.value)}
			/>
			<Button variant='outlined' type='submit'>Salvar</Button>
		</form>
	)       
}

export default FormularioRestaurante