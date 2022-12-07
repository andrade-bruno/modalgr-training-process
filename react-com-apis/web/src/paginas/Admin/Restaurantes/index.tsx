import React from 'react'
import IRestaurante from './../../../interfaces/IRestaurante'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import axios from 'axios'

const AdminRestaurantes = () => {
	const [restaurantes, setRestaurantes] = React.useState<IRestaurante[]>([])

	React.useEffect(() => {
		axios.get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
			.then(res => {
				setRestaurantes(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nome</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{restaurantes.map(item => (
						<TableRow key={item.id}>
							<TableCell>{item.nome}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default AdminRestaurantes