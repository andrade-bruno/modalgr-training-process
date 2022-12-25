import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import Input from 'components/Input'
import { Main, Avatar, Form, BackgroundImg, Content } from './styles'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Unauthorized from 'pages/Unauthorized'

import { useUserContext } from 'contexts/UserContext'
import { useAccessLevelsContext } from 'contexts/AccessLevelsContext'
import { useBikesContext } from 'contexts/BikesContext'
import { useCollaboratorsContext } from 'contexts/CollaboratorsContext'

const Profile = () => {
	const { getLevels, getAccessLevelNameById } = useAccessLevelsContext()
	const { bikes, getBikes, updateBike } = useBikesContext()
	const { updateCollaborator } = useCollaboratorsContext()
	const { user, token } = useUserContext()
	
	useEffect(() => {
		if (token && user) {
			getLevels()
			getBikes()
		}
		setName(user.nome)
		setEmail(user.email)
	}, [user, token])
	
	useEffect(() => {
		const mybike = bikes[0] && bikes.find(bike => bike.colaborador_id === user.id)
		setBikeNumber(mybike?.numero)
	}, [bikes])
	
	const [isEditing, setIsEditing] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [oldPassword, setOldPassword] = useState('')
	const [bikeNumber, setBikeNumber] = useState<number | undefined>()

	if (!user) return <Unauthorized />
	
	const avatarSize = 100

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()

		if (user.senha !== oldPassword) {
			toast.info('Senha atual incorreta, tente novamente')
			return false
		}

		if (user.nivel_id === 2 && bikeNumber) {
			const bikeToUpdate = bikes.find(bike => bike.numero === bikeNumber)

			if (bikeToUpdate) {
				await updateBike(bikeToUpdate.id, {
					colaborador_id: user.id,
					numero: bikeToUpdate.numero,
					status: bikeToUpdate.status
				})
			}
		}

		await updateCollaborator(user.id, {
			nome: name,
			email: email,
			senha: newPassword,
			nivel_id: user.nivel_id,
			ativo: true
		})

		setIsEditing(false)
	}
	
	return (
		<Main>
			<BackgroundImg />
			<Content>
				<div>
					<h1>Conta</h1>
					<Avatar
						alt={user.nome && user.nome[0]}
						sx={{fontSize: avatarSize, width: avatarSize+10 , height: avatarSize+10}}
						// src={user.avatarUrl}
					>
						{user.nome && user?.nome[0]}
					</Avatar>
				</div>
				<Form>
					<Input
						type='string'
						label='ID'
						fullWidth
						value={`${user.id}`}
						disabled
					/>
					<Input
						type='string'
						label='Nome'
						fullWidth
						value={name}
						setter={setName}
						disabled={!isEditing}
						required
					/>
					<Input
						type='string'
						label='E-mail'
						fullWidth
						value={email}
						setter={setEmail}
						disabled={!isEditing || user.nivel_id != 2}
						required
					/>
					<Input
						type='password'
						label='Senha'
						fullWidth
						value={oldPassword}
						setter={setOldPassword}
						disabled={!isEditing}
						required
					/>
					<Input
						type='password'
						label='Nova senha'
						fullWidth
						value={newPassword}
						setter={setNewPassword}
						disabled={!isEditing}
						required
						sx={{marginBottom: 3}}
					/>
					<FormControl fullWidth>
						<InputLabel id='bike-label'>Bicicleta</InputLabel>
						<Select
							labelId='bike-label'
							label='Bicicleta'
							color='primary'
							value={String(bikeNumber)}
							onChange={e => setBikeNumber(Number(e.target.value))}
							margin='dense'
							fullWidth
							required
							disabled={!isEditing || user.nivel_id != 2}
						>
							{bikes[0] && bikes.map(item => (
								<MenuItem value={item.numero} key={item.id}>{item.numero}</MenuItem>
							))}
						</Select>
					</FormControl>
					<Input
						label='Data de registro'
						value={`${user.data_registro}`}
						type='string'
						fullWidth
						disabled
						sx={{marginTop: 3}}
					/>
					<Input
						label='Perfil de acesso'
						value={`${getAccessLevelNameById(user.nivel_id)}`}
						type='string'
						fullWidth
						disabled
					/>
					<div style={{display: 'flex', width: '100%', gap: 6}}>
						<Button
							onClick={(e) => isEditing ? handleSubmit(e) : setIsEditing(true)}
							type={isEditing ? 'submit' : 'button'}
							variant='outlined'
							sx={{marginTop: 3, width: isEditing ? '50%' : '100%'}}
						>
							{isEditing ? 'Salvar' : 'Editar'}
						</Button>
						{isEditing && <Button
							type='button'
							onClick={() => setIsEditing(false)}
							variant='outlined'
							color='error'
							sx={{marginTop: 3, width: '50%'}}
						>
							Cancelar
						</Button>}
					</div>
				</Form>
			</Content>
		</Main>	
	)
}


export default Profile