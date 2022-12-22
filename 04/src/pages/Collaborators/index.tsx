import React, { useEffect, useState } from 'react'

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
	Button,
	TextField
} from '@mui/material'

import {
	EditRounded,
	DeleteRounded,
	MoreVertRounded,
	AddRounded
} from '@mui/icons-material'

import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import Unauthorized from 'pages/Unauthorized'
import { Header, Form } from 'styles/commom'
import Modal from 'components/Modal'
import Input from 'components/Input'
import { useUserContext } from 'contexts/UserContext'
import { useCollaboratorsContext } from 'contexts/CollaboratorsContext'

const Collaborators = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const [isOpen, setIsOpen] = useState(false)
	const [isEditing, setIsEditing] = useState(false)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [registerDate, setRegisterDate] = useState<Dayjs | null>(null)
	const [permissionLevel, setPermissionLevel] = useState(1)

	const { user } = useUserContext()
	const { collaborators, getCollaborators, addColaborator } = useCollaboratorsContext()
	
	useEffect(() => {
		getCollaborators()
	}, [])
	
	if (user.nivel_id !== 2) return <Unauthorized />

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}
	const handleCloseModal = () => {
		setIsOpen(false)
		// setKilometers(0)
		// setHours(0)
		// setSelectedRelease(0)
		setIsEditing(false)
	}
	const handleAddCollaborator = () => {
		return 
	}
	const handleSubmitAdd = () => {
		addColaborator({
			nome: name,
			email: email,
			senha: password,
			data_registro: registerDate,
			ativo: true,
			nivel_id: permissionLevel,
		})
		handleCloseModal()
	}
	const handleSubmitEdit = async () => {
		// if (kilometers && hours) {
		// 	await updateRelease(selectedRelease, kilometers, hours)
		// 	setIsOpen(false)
		// 	handleCloseMenu()
		// }
	}

	return (
		<>
			<Header>
				<h1>Gerenciar Colaboradores</h1>
				<Button
					variant="outlined"
					color="success"
					sx={{margin: 'auto 0px'}}
					onClick={handleAddCollaborator}
				>
					<AddRounded />
					Adicionar
				</Button>
			</Header>
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
				onClose={handleCloseMenu}
			>
				<MenuItem onClick={handleCloseMenu}>
					<EditRounded color='warning'/> Editar
				</MenuItem>
				<MenuItem onClick={handleCloseMenu}>
					<DeleteRounded color='error' /> Remover
				</MenuItem>
			</Menu>

			<Modal
				isOpen={isOpen}
				onClose={() => handleCloseModal()}
				title={isEditing ? 'Editar lançamento' : 'Adicionar lançamento'}
			>
				<Form>
					<Input
						label='Nome'
						value={name}
						setter={setName}
						type='string'
						fullWidth
						required
					/>
					<Input
						label='E-mail'
						value={email}
						setter={setEmail}
						type='email'
						fullWidth
						required
					/>
					<Input
						label='Senha'
						value={password}
						setter={setPassword}
						type='password'
						fullWidth
						required
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label="Data de registro"
							value={registerDate}
							onChange={(newValue) => {
								setRegisterDate(newValue)
							}}
							renderInput={(params) => <TextField {...params}/>}
						/>
					</LocalizationProvider>
					<Input
						label='Nível de acesso'
						value={permissionLevel}
						setter={setPermissionLevel}
						type='number'
						fullWidth
						required
					/>
					<Button
						variant='outlined'
						color='success'
						onClick={() => isEditing ? handleSubmitEdit() : handleSubmitAdd()}
					>
						{isEditing ? 'Editar' : 'Adicionar'}
					</Button>
				</Form>
			</Modal>
		</>
	)
}

export default Collaborators