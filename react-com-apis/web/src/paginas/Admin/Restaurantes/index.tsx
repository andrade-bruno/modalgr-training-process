import React from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../../../services/http'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import IRestaurante from './../../../interfaces/IRestaurante'

const AdminRestaurantes = () => {
	const navigate = useNavigate()
	const [restaurantes, setRestaurantes] = React.useState<IRestaurante[]>([])

	React.useEffect(() => {
		http.get<IRestaurante[]>('restaurantes/')
			.then(res => {
				setRestaurantes(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	const handleDelete = (restaurante: IRestaurante) => {
		http.delete(`restaurantes/${restaurante.id}/`)
			.then(() => {
				const novaLista = restaurantes.filter(item => item.id !== restaurante.id)
				setRestaurantes(novaLista)
				alert(`${restaurante.nome} removido com sucesso`)
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nome</TableCell>
						<TableCell>Editar</TableCell>
						<TableCell>Excluir</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map(item => (
						<TableRow key={item.id}>
							<TableCell>
								{item.nome}
							</TableCell>
							<TableCell>{
								<Button
									variant='outlined'
									color='warning'
									onClick={() => navigate(`/admin/restaurantes/${item.id}`)}
								>
									Editar	
								</Button>
							}</TableCell>
							<TableCell>
								<Button 
									variant='outlined'
									color='error'
									onClick={() => handleDelete(item)}
								>
									Excluir
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default AdminRestaurantes