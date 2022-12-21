import React, { useEffect } from 'react'

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
import Unauthorized from 'pages/Unauthorized'
import { useUserContext } from 'contexts/UserContext'
import { useCollaboratorsContext } from 'contexts/CollaboratorsContext'

const Collaborators = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const { user } = useUserContext()
	const { collaborators, getCollaborators } = useCollaboratorsContext()
	
	useEffect(() => {
		getCollaborators()
	}, [])
	
	if (user.nivel_id !== 2) return <Unauthorized />

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<h1>Gerenciar Colaboradores</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell align='center'>ID</TableCell>
							<TableCell align='left'>Nome</TableCell>
							<TableCell align='left'>E-mail</TableCell>
							<TableCell align='center'>Status</TableCell>
							<TableCell align='center'>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{collaborators && collaborators.map((item) => (
							<TableRow key={item.id}>
								<TableCell align='center'>{item.id}</TableCell>
								<TableCell align='left'>{item.nome}</TableCell>
								<TableCell align='left'>{item.email}</TableCell>
								<TableCell align='center'>
									{item.ativo ?
										<Chip variant="outlined" color="success" label='Ativo'/> : 
										<Chip variant='outlined' color='error' label='Inativo' />
									}
								</TableCell>
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
					<EditRounded color='warning'/> Editar
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<DeleteRounded color='error' /> Remover
				</MenuItem>
			</Menu>
		</>
	)
}

export default Collaborators