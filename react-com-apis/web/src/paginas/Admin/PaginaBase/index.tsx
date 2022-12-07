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

import { Outlet,Link as RouterLink } from 'react-router-dom'

const PaginaBase = () => {
	return ( 
		<>
			<AppBar position='static'>
				<Container maxWidth='xl'>
					<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Typography variant='h6'>Administração</Typography>
						<Box>
							<Link component={RouterLink} to='/admin/restaurantes/'>
								<Button sx={{ my: 2, color: 'white'}}>Restaurantes</Button>
							</Link>
							<Link component={RouterLink} to='/admin/restaurantes/novo'>
								<Button sx={{ my: 2, color: 'white'}}>Adicionar Restaurante</Button>
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