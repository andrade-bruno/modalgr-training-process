import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Chip
} from '@mui/material'

import {
	EditRounded,
	DeleteRounded
} from '@mui/icons-material'

const rows = [
	{ id: 1, name: 'Snow', bike: 35, status: 1 },
	{ id: 2, name: 'Lannister', bike: 42, status: 0 },
	{ id: 3, name: 'Lannister', bike: 45, status: 1 },
	{ id: 4, name: 'Stark', bike: 16, status: 1 },
	{ id: 5, name: 'Targaryen', bike: null, status: 1 },
	{ id: 6, name: 'Melisandre', bike: 150, status: 1 },
	{ id: 7, name: 'Clifford', bike: 44, status: 0 },
	{ id: 8, name: 'Frances', bike: 36, status: 1 },
	{ id: 9, name: 'Roxie', bike: 65, status: 1 }
]

const Collaborators = () => {
	return (
		<>
			<h1>Gerenciar Colaboradores</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell align='center'>ID</TableCell>
							<TableCell align='left'>Nome</TableCell>
							<TableCell align='center'>Bicicleta</TableCell>
							<TableCell align='center'>Status</TableCell>
							<TableCell align='center'>Editar</TableCell>
							<TableCell align='center'>Remover</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((item) => (
							<TableRow key={item.id}>
								<TableCell align='center'>{item.id}</TableCell>
								<TableCell align='left'>{item.name}</TableCell>
								<TableCell align='center'>{item.bike}</TableCell>
								<TableCell align='center'>
									{item.status === 1 ?
										<Chip variant="outlined" color="success" label='Ativo'/> : 
										<Chip variant='outlined' color='error' label='Inativo' />
									}
								</TableCell>
								<TableCell align='center'>
									<Chip variant="outlined" color="warning" label='Editar' icon={<EditRounded />} />
								</TableCell>
								<TableCell align='center'>
									<Chip variant="outlined" color="error" label='Remover' icon={<DeleteRounded />} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default Collaborators