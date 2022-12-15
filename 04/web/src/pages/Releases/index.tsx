import React from 'react'

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Chip,
	Menu,
	MenuItem,
	Button
} from '@mui/material'

import {
	EditRounded,
	DeleteRounded,
	MoreVertRounded
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

const Releases = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	
	return (
		<>
			<h1>Gerenciar Lançamentos</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell align='center'>ID</TableCell>
							<TableCell align='left'>Nome</TableCell>
							<TableCell align='center'>KM</TableCell>
							<TableCell align='center'>Horas</TableCell>
							<TableCell align='center'>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((item) => (
							<TableRow key={item.id}>
								<TableCell align='center'>{item.id}</TableCell>
								<TableCell align='left'>{item.name}</TableCell>
								<TableCell align='center'>{item.distance}</TableCell>
								<TableCell align='center'>{item.hours}</TableCell>
								<TableCell align='center'>
									<Button onClick={handleMenu}><MoreVertRounded /></Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					<Chip variant="outlined" color="warning" label='Editar' icon={<EditRounded />} />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Chip variant="outlined" color="error" label='Remover' icon={<DeleteRounded />} />
				</MenuItem>
			</Menu>
		</>
	)
}

export default Releases