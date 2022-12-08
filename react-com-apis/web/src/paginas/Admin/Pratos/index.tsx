import React from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../../../services/http'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import IPrato from './../../../interfaces/IPrato'

const AdminPratos = () => {
	const navigate = useNavigate()
	const [pratos, setPratos] = React.useState<IPrato[]>([])

	React.useEffect(() => {
		http.get<IPrato[]>('pratos/')
			.then(res => {
				setPratos(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	const handleDelete = (prato: IPrato) => {
		http.delete(`pratos/${prato.id}/`)
			.then(() => {
				const novaLista = pratos.filter(item => item.id !== prato.id)
				setPratos(novaLista)
				alert(`${prato.nome} removido com sucesso`)
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
						<TableCell>Tag</TableCell>
						<TableCell>Imagem</TableCell>
						<TableCell>Editar</TableCell>
						<TableCell>Excluir</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{pratos.map(item => (
						<TableRow key={item.id}>
							<TableCell>
								{item.nome}
							</TableCell>
							<TableCell>
								{item.tag}
							</TableCell>
							<TableCell>
								<a href={`${item.imagem}`} target='_blank' rel='noreferrer'>Ver imagem</a>
							</TableCell>
							<TableCell>{
								<Button
									variant='outlined'
									color='warning'
									onClick={() => navigate(`/admin/pratos/${item.id}`)}
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

export default AdminPratos