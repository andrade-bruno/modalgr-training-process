import React, { useState, useEffect } from 'react'

import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Menu,
	MenuItem,
	Button
} from '@mui/material'

import {
	EditRounded,
	DeleteRounded,
	MoreVertRounded
} from '@mui/icons-material'

import { useReleasesContext } from 'contexts/ReleasesContext'
import { useUserContext } from 'contexts/UserContext'

import { Form } from 'styles/commom'
import Input from 'components/Input'
import Modal from 'components/Modal'
import Unauthorized from 'pages/Unauthorized'
import { useCollaboratorsContext } from 'contexts/CollaboratorsContext'

const Releases = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl) // HTML Element
	const [isOpen, setIsOpen] = useState(false)

	const [kilometers, setKilometers] = useState<number>(0)
	const [hours, setHours] = useState<number>(0)
	const [selectedRelease, setSelectedRelease] = useState<number>(0)

	const { releases, removeRelease, getReleases, getReleaseById, updateRelease } = useReleasesContext()
	const { user, token } = useUserContext()
	const { getCollaborators, getCollaboratorNameById } = useCollaboratorsContext()

	if (user.nivel_id !== 2) return <Unauthorized />

	useEffect(() => {
		if (token && user.nivel_id === 2) {
			getCollaborators()
			getReleases()
		}
	}, [token, user])

	const handleCloseModal = () => {
		setIsOpen(false)
		setKilometers(0)
		setHours(0)
		setSelectedRelease(0)
	}
	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}
	const handleDeleteRelease = () => {
		anchorEl ? removeRelease(Number(anchorEl.id)) : null
		handleCloseMenu()
	}
	const handleSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (kilometers && hours) {
			await updateRelease(selectedRelease, kilometers, hours)
			setIsOpen(false)
			handleCloseMenu()
		}
	}
	const handleEditRelease = async () => {
		const res = await getReleaseById(Number(anchorEl?.id))
		if (res) {
			setKilometers(Number(res.km))
			setHours(Number(res.tempo))
			setSelectedRelease(Number(anchorEl?.id))
			setIsOpen(true)
			handleCloseMenu()
		}
	}
	
	return (
		<>
			<h1>Gerenciar Lançamentos</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableCell align='center'>ID</TableCell>
							<TableCell align='left'>Colaborador</TableCell>
							<TableCell align='center'>KM</TableCell>
							<TableCell align='center'>Horas</TableCell>
							<TableCell align='center'>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{releases[0] && releases.map((item) => (
							<TableRow key={item.id}>
								<TableCell align='center'>{item.id}</TableCell>
								<TableCell align='left'>{`${getCollaboratorNameById(item.colaborador_id)}`}</TableCell>
								<TableCell align='center'>{item.km}</TableCell>
								<TableCell align='center'>{item.tempo}</TableCell>
								<TableCell align='center'>
									<Button onClick={e => handleMenu(e)} id={`${item.id}`}>
										<MoreVertRounded />
									</Button>
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
				<MenuItem onClick={handleEditRelease} style={{gap: 6}}>
					<EditRounded color='warning'/> Editar
				</MenuItem>
				<MenuItem onClick={handleDeleteRelease} style={{gap: 6}}>
					<DeleteRounded color='error' /> Remover
				</MenuItem>
			</Menu>

			<Modal
				isOpen={isOpen}
				onClose={() => handleCloseModal()}
				title='Editar lançamento'
			>
				<Form onSubmit={e => handleSubmitEdit(e)}>
					<Input
						label='Distância (km)'
						value={kilometers}
						setter={setKilometers}
						type='number'
						fullWidth
						required
					/>
					<Input
						label='Horas'
						value={hours}
						setter={setHours}
						type='number'
						fullWidth
						required
					/>
					<Button
						variant='outlined'
						color='success'
						type='submit'
					>
						Editar
					</Button>
				</Form>
			</Modal>
		</>
	)
}

export default Releases