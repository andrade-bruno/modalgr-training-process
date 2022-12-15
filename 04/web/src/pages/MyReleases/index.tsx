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
	{ id: 1, name: 'Snow', distance: 35, hours: 4 },
	{ id: 2, name: 'Lannister', distance: 42, hours: 4 },
	{ id: 3, name: 'Lannister', distance: 45, hours: 4 },
	{ id: 4, name: 'Stark', distance: 16, hours: 4 },
	{ id: 5, name: 'Targaryen', distance: null, hours: 4 },
	{ id: 6, name: 'Melisandre', distance: 150, hours: 4 },
	{ id: 7, name: 'Clifford', distance: 44, hours: 4 },
	{ id: 8, name: 'Frances', distance: 36, hours: 4 },
	{ id: 9, name: 'Roxie', distance: 65, hours: 4 }
]

const MyReleases = () => {
	return (
		<>
			<h1>Meus Lançamentos</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Nome</TableCell>
							<TableCell>KM</TableCell>
							<TableCell>Horas</TableCell>
							<TableCell>Editar</TableCell>
							<TableCell>Remover</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.distance}</TableCell>
								<TableCell>{item.hours}</TableCell>
								<TableCell>
									<Chip variant="outlined" color="warning" label='Editar' icon={<EditRounded />} />
								</TableCell>
								<TableCell>
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

export default MyReleases