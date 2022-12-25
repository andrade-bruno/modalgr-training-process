import { useEffect } from 'react'
import { useUserContext } from 'contexts/UserContext'
import Unauthorized from 'pages/Unauthorized'
import { Main, WelcomeCard, DashboardBike } from './styles'
import { useBikesContext } from 'contexts/BikesContext'
import { Button } from '@mui/material'
import theme from 'styles/theme'
import { Link } from 'react-router-dom'

const Dashboard = () => {
	const { user, token } = useUserContext()
	const { bikes, getBikes } = useBikesContext()

	useEffect(() => {
		if (token && user.nivel_id === 2) getBikes()
	}, [token, user])
	
	if (user.nivel_id !== 2) return <Unauthorized />
	
	const availableBikes = bikes[0] && bikes.filter(bike => bike.status == true && bike.colaborador_id == null)

	return (
		<>
			<h1>Dashboard</h1>
			<Main>
				<WelcomeCard>
					<div>
						<p style={{color: theme.colors.orange, fontWeight: 900}}>Olá {user.nome.split(' ')[0]}!</p>
						<p>
							Hoje <b>{availableBikes && ((availableBikes.length < 1) ? 'não temos nenhuma bicicleta disponível' : availableBikes.length == 1 ? 'temos 1 bicicleta disponível' : `temos ${availableBikes.length} bicicletas disponíveis`)}</b> para entrega. 
						</p>
						<p>
							Verifique a lista no botão abaixo.
						</p>
						<Link to='/admin/bikes'>
							<Button variant='outlined' style={{borderColor: theme.colors.orange, color: theme.colors.orange}}>
								Bicicletas
							</Button>
						</Link>
					</div>
					<div>
						<DashboardBike src='/assets/dashboard-bike.png' alt='Imagem de bicicleta'/>
					</div>
				</WelcomeCard>
			</Main>
		</>
	)
}
 
export default Dashboard