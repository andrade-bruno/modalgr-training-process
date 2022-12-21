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
	MoreVertRounded,
	AddRounded
} from '@mui/icons-material'

import { useReleasesContext } from 'contexts/ReleasesContext'
import { Header } from 'styles/commom'
import { Form } from './styles'
import Modal from 'components/Modal'
import Input from 'components/Input'
import { useUserContext } from 'contexts/UserContext'

const MyReleases = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl) // HTML Element
	const [isOpen, setIsOpen] = useState(false)

	const [kilometers, setKilometers] = useState<number>()
	const [hours, setHours] = useState<number>()

	const { releases, addRelease, getReleases, removeRelease } = useReleasesContext()
	const { user } = useUserContext()
	const myreleases = releases.filter(item => item.colaborador_id === user.id)

	useEffect(() => {
		getReleases()
	}, [])

	const handleCloseModal = () => {
		setIsOpen(false)
		setKilometers(undefined)
		setHours(undefined)
	}
	const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}
	const handleAddRelease = () => {
		if (kilometers && hours) {
			addRelease(kilometers, hours)
			handleCloseModal()
		}
	}
	const handleDeleteRelease = () => {
		anchorEl?.id ? removeRelease(Number(anchorEl.id)) : null
		handleCloseMenu()
	}
	
	return (
		<>
			<Header>
				<h1>Meus Lançamentos</h1>
				<Button
					variant="outlined"
					color="success"
					sx={{margin: 'auto 0px'}}
					onClick={() => setIsOpen(true)}
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
							<TableCell align='center'>KM</TableCell>
							<TableCell align='center'>Horas</TableCell>
							<TableCell align='center'>Ações</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{myreleases.map((item) => (
							<TableRow key={item.id}>
								<TableCell align='center'>{item.id}</TableCell>
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
				<MenuItem onClick={handleCloseMenu}>
					<EditRounded color='warning'/> Editar
				</MenuItem>
				<MenuItem onClick={handleDeleteRelease}>
					<DeleteRounded color='error' /> Remover
				</MenuItem>
			</Menu>

			<Modal
				isOpen={isOpen}
				onClose={() => handleCloseModal()}
				title='Adicionar lançamento'
			>
				<Form>
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
						onClick={handleAddRelease}
					>
						Finalizar
					</Button>
				</Form>
			</Modal>
		</>
	)
}

export default MyReleases