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
	Button
} from '@mui/material'

import {
	EditRounded,
	DeleteRounded,
	MoreVertRounded,
	AddRounded,
	BlockRounded
} from '@mui/icons-material'

import Unauthorized from 'pages/Unauthorized'
import { Header, Form } from 'styles/commom'
import Modal from 'components/Modal'
import Input from 'components/Input'
import { useUserContext } from 'contexts/UserContext'
import { useBikesContext } from 'contexts/BikesContext'
import { useCollaboratorsContext } from 'contexts/CollaboratorsContext'

const Bikes = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const [isOpen, setIsOpen] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [selectedBike, setSelectedBike] = useState<number>(0)

	const [bikeNumber, setBikeNumber] = useState<number>(0)
	const [collaboratorId, setCollaboratorId] = useState<number>(0)
	const [isActive, setIsActive] = useState<boolean>(true)

	const { user, token } = useUserContext()
	const { getCollaboratorNameById } = useCollaboratorsContext()
	const { bikes, getBikes, getBikeById, addBike, deleteBike, updateBike, inactivateBike } = useBikesContext()
	
	useEffect(() => {
		if (token) getBikes()
	}, [token])
	
	if (user.nivel_id !== 2) return <Unauthorized />

	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}
	const handleCloseModal = () => {
		setIsOpen(false)
		setTimeout(() => {
			setBikeNumber(0)
			setCollaboratorId(0)
			setSelectedBike(0)
			setIsEditing(false)
		}, 500)
	}
	const handleAddBike = () => {
		setIsEditing(false)
		setIsOpen(true)
		handleCloseMenu()
	}
	const handleSubmitAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		addBike({
			colaborador_id: collaboratorId,
			numero: bikeNumber,
			status: isActive
		})
		handleCloseModal()
	}
	const handleEditBike = async () => {
		setIsEditing(true)
		const res = await getBikeById(Number(anchorEl?.id))
		if (res) {
			setBikeNumber(res.numero)
			setCollaboratorId(res.colaborador_id)
			setSelectedBike(Number(anchorEl?.id))
			setIsOpen(true)
			handleCloseMenu()
		}
	}
	const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await updateBike(selectedBike, {
			colaborador_id: collaboratorId,
			numero: bikeNumber,
			status: isActive
		})
		setIsOpen(false)
		handleCloseMenu()
	}
	const handleDeleteBike = async () => {
		await deleteBike(Number(anchorEl?.id))
		handleCloseMenu()
	}
	const handleInactivateBike = async () => {
		await inactivateBike(Number(anchorEl?.id))
		handleCloseMenu()
	}

	return (
		<>
			<Header>
				<h1>Gerenciar Bicicletas</h1>
				<Button
					variant="outlined"
					color="success"
					sx={{margin: 'auto 0px'}}
					onClick={handleAddBike}
				>
					<AddRounded />
					Adicionar
				</Button>
			</Header>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell align='left'>ID</TableCell>
							<TableCell align='left'>Número</TableCell>
							<TableCell align='left'>Status</TableCell>
							<TableCell align='left'>Nome do usuário</TableCell>
							<TableCell align='left'>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bikes[0] && bikes.map((item) => (
							<TableRow key={item.id} style={item.colaborador_id === user.id ? {backgroundColor: '#dff7e0'} : {}}>
								<TableCell align='left'>{item.id}</TableCell>
								<TableCell align='left'>{item.numero}</TableCell>
								<TableCell align='left'>
									{item.status && item.colaborador_id ? <Chip variant="outlined" color="info" label='Em uso'/> 
										: item.status ? <Chip variant="outlined" color="success" label='Disponível'/>
											: <Chip variant='outlined' color='error' label='Inativa' />
									}
								</TableCell>
								<TableCell align='left'>{`${getCollaboratorNameById(item.colaborador_id)}`}</TableCell>
								<TableCell align='left'>
									{item.status &&
										<Button onClick={e => handleMenu(e)} id={`${item.id}`}>
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
				<MenuItem onClick={handleEditBike}>
					<EditRounded color='warning'/> Editar
				</MenuItem>
				<MenuItem onClick={handleInactivateBike}>
					<BlockRounded color='warning' /> Desativar
				</MenuItem>
				<MenuItem onClick={handleDeleteBike}>
					<DeleteRounded color='error' /> Remover
				</MenuItem>
			</Menu>

			<Modal
				isOpen={isOpen}
				onClose={handleCloseModal}
				title={isEditing ? 'Editar bicicleta' : 'Adicionar bicicleta'}
			>
				<Form onSubmit={(e) => isEditing ? handleSubmitEdit(e) : handleSubmitAdd(e)}>
					<Input
						label='Número'
						value={bikeNumber}
						setter={setBikeNumber}
						type='number'
						fullWidth
						required
					/>
					<Input
						label='Usuário (opcional)'
						value={collaboratorId}
						setter={setCollaboratorId}
						type='number'
						fullWidth
						required={false}
					/>
					{isEditing && <Input
						label='Ativo'
						value={isActive}
						setter={setIsActive}
						type='status'
						fullWidth
					/>}
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

export default Bikes