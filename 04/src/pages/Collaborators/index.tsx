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
	TextField,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@mui/material'

import {
	EditRounded,
	MoreVertRounded,
	AddRounded,
	BlockRounded,
	CheckRounded
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
	const [selectedCollaborator, setSelectedCollaborator] = useState<number>(0)
	const [accessLevel, setAccessLevel] = useState(0)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [registerDate, setRegisterDate] = useState<Dayjs | string | null>(null)
	const [permissionLevel, setPermissionLevel] = useState(1)
	const [isActive, setIsActive] = useState<string>('true')

	const today = new Date()
	const currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

	const { user, token } = useUserContext()
	const { getCollaborators, collaborators, addColaborator, getCollaboratorById, updateCollaborator, inactivateCollaborator, guaranteeAccess } = useCollaboratorsContext()
	
	useEffect(() => {
		if (token && user.nivel_id === 2) getCollaborators()
	}, [token, user])

	if (user.nivel_id !== 2) return <Unauthorized />

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>, accessLevelId: number) => {
		setAnchorEl(event.currentTarget)
		setAccessLevel(accessLevelId)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}
	const handleCloseModal = () => {
		setIsOpen(false)
		setTimeout(() => {
			setName('')
			setEmail('')
			setRegisterDate(null)
			setPermissionLevel(1)
			setSelectedCollaborator(0)
			setIsEditing(false)
			setIsActive('true')
		}, 500)
	}
	const handleAddCollaborator = () => {
		setIsEditing(false)
		setIsOpen(true)
		handleCloseMenu()
	}
	const handleSubmitAdd = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await addColaborator({
			nome: name,
			email: email,
			senha: password,
			data_registro: registerDate,
			nivel_id: permissionLevel,
			ativo: true
		})
		handleCloseModal()
	}
	const handleEditCollaborator = async () => {
		setIsEditing(true)
		const res = await getCollaboratorById(Number(anchorEl?.id))
		if (res) {
			setName(res.nome)
			setEmail(res.email)
			setRegisterDate(res.data_registro)
			setPermissionLevel(res.nivel_id)
			setIsActive(String(res.ativo))
			setSelectedCollaborator(Number(anchorEl?.id))
			setIsOpen(true)
			handleCloseMenu()
		}
	}
	const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await updateCollaborator(selectedCollaborator, {
			nome: name,
			email: email,
			senha: password,
			data_registro: registerDate,
			nivel_id: permissionLevel,
			ativo: isActive
		})
		setIsOpen(false)
		handleCloseMenu()
	}
	const handleInactivateCollaborator = async () => {
		await inactivateCollaborator(Number(anchorEl?.id))
		handleCloseMenu()
	}
	const handleGuaranteeAccess = async () => {
		await guaranteeAccess(Number(anchorEl?.id))
		handleCloseMenu()
	}

	return (
		<>
			<Header>
				<h1>Gerenciar Colaboradores</h1>
				<Button
					variant='outlined'
					color='success'
					sx={{margin: 'auto 0px'}}
					onClick={handleAddCollaborator}
				>
					<AddRounded />
					Adicionar
				</Button>
			</Header>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>ID</TableCell>
							<TableCell align='left'>Nome</TableCell>
							<TableCell align='left'>E-mail</TableCell>
							<TableCell align='center'>Status</TableCell>
							<TableCell align='center'>Acesso</TableCell>
							<TableCell align='center'>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{collaborators[0] && collaborators.map((item) => (
							<TableRow key={item.id} style={item.id === user.id ? {backgroundColor: '#e9f1f5'} : {}}>
								<TableCell align='center'>{item.id}</TableCell>
								<TableCell align='left'>{item.nome}</TableCell>
								<TableCell align='left'>{item.email}</TableCell>
								<TableCell align='center'>
									{item.ativo ?
										<Chip variant='outlined' color='success' label='Ativo'/> : 
										<Chip variant='outlined' color='error' label='Inativo' />
									}
								</TableCell>
								<TableCell align='center'>
									{
										item.nivel_id === 2 ? <Chip variant='outlined' color='error' label='Admin'/> 
											: item.nivel_id === 1 ? <Chip variant='outlined' color='success' label='Colaborador' />
												: item.nivel_id === 3 ? <Chip variant='outlined' color='default' label='Aguardando acesso' />
													: null
									}
								</TableCell>
								<TableCell align='center'>
									{item.id !== user.id &&
										<Button onClick={e => handleMenu(e, item.nivel_id)} id={`${item.id}`}>
											<MoreVertRounded />
										</Button>
									}
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
				<MenuItem onClick={handleEditCollaborator} style={{gap: 6}}>
					<EditRounded color='warning'/> Editar
				</MenuItem>
				<MenuItem onClick={handleInactivateCollaborator} style={{gap: 6}}>
					<BlockRounded color='error' /> Desativar
				</MenuItem>
				{accessLevel === 3 && <MenuItem onClick={handleGuaranteeAccess} style={{gap: 6}}>
					<CheckRounded color='success'/> Liberar
				</MenuItem>}
			</Menu>

			<Modal
				isOpen={isOpen}
				onClose={() => handleCloseModal()}
				title={isEditing ? 'Editar colaborador' : 'Adicionar colaborador'}
			>
				<Form onSubmit={(e) => isEditing ? handleSubmitEdit(e) : handleSubmitAdd(e)}>
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
						label={isEditing ? 'Nova senha': 'Senha'}
						value={password}
						setter={setPassword}
						type='password'
						fullWidth
						required={!isEditing}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							label='Data de registro'
							value={registerDate}
							views={['day', 'month', 'year']}
							maxDate={currentDate}
							onChange={(newValue) => {
								setRegisterDate(newValue)
							}}
							renderInput={(params) => <TextField
								fullWidth
								required
								margin='normal'
								{...params}
							/>}
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
					<FormControl style={{width: '95%'}}>
						<RadioGroup
							value={isActive}
							onChange={e => setIsActive((e.target as HTMLInputElement).value)}
							style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}
						>
							<FormControlLabel value='true' control={<Radio />} label='Ativo' />
							<FormControlLabel value='false' control={<Radio />} label='Inativo' />
						</RadioGroup>
					</FormControl>
					<Button
						variant='outlined'
						color='success'
						type='submit'
					>
						{isEditing ? 'Editar' : 'Adicionar'}
					</Button>
				</Form>
			</Modal>
		</>
	)
}

export default Collaborators