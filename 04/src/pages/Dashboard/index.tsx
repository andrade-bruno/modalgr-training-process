import { useEffect } from 'react'
import { useUserContext } from 'contexts/UserContext'
import Unauthorized from 'pages/Unauthorized'
import { Main, WelcomeCard, DashboardBike, SquareCard, CounterHighlight } from './styles'
import { useBikesContext } from 'contexts/BikesContext'
import { Button } from '@mui/material'
import theme from 'styles/theme'
import { Link } from 'react-router-dom'
import { Co2Rounded, DirectionsBikeRounded, NearMeRounded } from '@mui/icons-material'
import { useReleasesContext } from 'contexts/ReleasesContext'
import RaceChart from './RaceChart'

const Dashboard = () => {
	const { user, token } = useUserContext()
	const { bikes, getBikes, getAvailableBikes } = useBikesContext()
	const { releases, getReleases } = useReleasesContext()

	useEffect(() => {
		if (token && user.nivel_id === 2) {
			getBikes()
			getReleases()
		}
	}, [token, user])
	
	if (user.nivel_id !== 2) return <Unauthorized />
	
	const availableBikes = bikes[0] && getAvailableBikes().length
	const borrowedBikes = bikes[0] && bikes.filter(bike => bike.colaborador_id).length
	const totalDistance = releases[0] && releases.reduce((sum, release) => {return sum + release.km}, 0)
	const totalGrKm = totalDistance * 0.82
	
	return (
		<Main>
			<WelcomeCard>
				<div>
					<p style={{color: theme.colors.orange, fontWeight: 900}}>Olá {user.nome && user.nome.split(' ')[0]}!</p>
					<p>
						Hoje <b>{availableBikes ? (availableBikes == 1 ? 'temos 1 bicicleta disponível' : `temos ${availableBikes} bicicletas disponíveis`) : 'não temos nenhuma bicicleta disponível'}</b> para entrega. 
					</p>
					<p>
						Verifique a lista no botão abaixo.
					</p>
					<Link to='/admin/bikes' style={{textDecoration: 'none'}}>
						<Button variant='outlined' style={{borderColor: theme.colors.orange, color: theme.colors.orange}}>
							Bicicletas
						</Button>
					</Link>
				</div>
				<div>
					<DashboardBike src='/assets/dashboard-bike.png' alt='Imagem de bicicleta'/>
				</div>
			</WelcomeCard>
			<SquareCard>
				<DirectionsBikeRounded sx={{width: 40, height: 40}}/>
				<CounterHighlight>Bicicletas</CounterHighlight>
				<CounterHighlight title={'true'}>{bikes.length}</CounterHighlight>
			</SquareCard>
			<SquareCard>
				<DirectionsBikeRounded sx={{width: 40, height: 40}}/>
				<CounterHighlight>Emprestadas</CounterHighlight>
				<CounterHighlight title={'true'}>{borrowedBikes}</CounterHighlight>
			</SquareCard>
			<WelcomeCard>
				<RaceChart />
			</WelcomeCard>
			<SquareCard>
				<NearMeRounded sx={{width: 40, height: 40}}/>
				<CounterHighlight>Distância percorrida</CounterHighlight>
				<CounterHighlight title={'true'}>{totalDistance?.toFixed(2)} KM</CounterHighlight>
			</SquareCard>
			<SquareCard title='co2'>
				<Co2Rounded sx={{width: 40, height: 40}}/>
				<CounterHighlight>Consumo Gr/Km</CounterHighlight>
				<CounterHighlight title={'true'}>{totalGrKm?.toFixed(2)}</CounterHighlight>
			</SquareCard>
		</Main>
	)
}
 
export default Dashboard