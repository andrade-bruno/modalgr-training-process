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
	AddRounded
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
	const { bikes, getBikes, getBikeById, addBike, deleteBike, updateBike } = useBikesContext()
	
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
	const handleSubmitAdd = () => {
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
	const handleSubmitEdit = async () => {
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

	return (
		<>
			<Header>
				<h1>Bikes</h1>
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
							<TableRow key={item.id} style={item.id === user.id ? {backgroundColor: '#dff7e0'} : {}}>
								<TableCell align='left'>{item.id}</TableCell>
								<TableCell align='left'>{item.numero}</TableCell>
								<TableCell align='left'>
									{item.status ?
										<Chip variant="outlined" color="success" label='Ativa'/> : 
										<Chip variant='outlined' color='error' label='Inativa' />
									}
								</TableCell>
								<TableCell align='left'>{`${getCollaboratorNameById(item.colaborador_id)}`}</TableCell>
								<TableCell align='left'>
									{item.status && item.id !== user.id &&
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
				<MenuItem onClick={handleDeleteBike}>
					<DeleteRounded color='error' /> Desativar
				</MenuItem>
			</Menu>

			<Modal
				isOpen={isOpen}
				onClose={handleCloseModal}
				title={isEditing ? 'Editar bicicleta' : 'Adicionar bicicleta'}
			>
				<Form>
					<Input
						label='Número'
						value={bikeNumber}
						setter={setBikeNumber}
						type='number'
						fullWidth
						required
					/>
					<Input
						label='Usuário'
						value={collaboratorId}
						setter={setCollaboratorId}
						type='number'
						fullWidth
						required
					/>
					<Input
						label='Ativo'
						value={isActive}
						setter={setIsActive}
						type='status'
						fullWidth
						required={!isEditing}
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

export default Bikes