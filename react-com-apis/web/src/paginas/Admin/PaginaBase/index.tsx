import {
	Button,
	Typography,
	Box,
	AppBar,
	Container,
	Toolbar,
	Link,
	Paper
} from '@mui/material'

import { Outlet,Link as RouterLink, useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const PaginaBase = () => {
	const navigate = useNavigate()
	return ( 
		<>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<IconButton
								color="default"
								aria-label="voltar"
								component="button"
								onClick={() => navigate('/')}
							>
								<ArrowBack />
							</IconButton>
							<Typography variant='h6'>Administração</Typography>
						</Box>
						<Box>
							<Link component={RouterLink} to='/admin/restaurantes/'>
								<Button sx={{ my: 2, color: 'white'}}>Restaurantes</Button>
							</Link>
							<Link component={RouterLink} to='/admin/restaurantes/novo'>
								<Button sx={{ my: 2, color: 'white'}}>Adicionar Restaurante</Button>
							</Link>
							<Link component={RouterLink} to='/admin/pratos/'>
								<Button sx={{ my: 2, color: 'white'}}>Pratos</Button>
							</Link>
							<Link component={RouterLink} to='/admin/pratos/novo'>
								<Button sx={{ my: 2, color: 'white'}}>Adicionar Prato</Button>
							</Link>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Box>
				<Container maxWidth='lg' sx={{ mt: 2 }}>
					<Paper sx={{ p: 4 }}>
						<Outlet />
					</Paper>
				</Container>
			</Box>
		</>
	)
}
 
export default PaginaBase