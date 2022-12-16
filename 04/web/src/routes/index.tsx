import { Route, Routes, BrowserRouter } from 'react-router-dom'

import NotFound from 'pages/NotFound'
import Default from 'pages/Default'
import Dashboard from 'pages/Dashboard'
import Collaborators from 'pages/Collaborators'
import Releases from 'pages/Releases'
import MyReleases from 'pages/MyReleases'
import { UserProvider } from 'contexts/UserContext'

const CommomRoutes = () => {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<h1>Login</h1>} />
					<Route path='/signup' element={<h1>Cadastro</h1>} />
					<Route path='/' element={<Default />}>
						<Route path='myreleases' element={<MyReleases />} />
					</Route>
					<Route path='/admin' element={<Default />}>
						<Route index element={<h1>Main Admin</h1>} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='releases' element={<Releases />} />
						<Route path='collaborators' element={<Collaborators />} />
						<Route path='docs' element={<h1>Documentação</h1>} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</UserProvider>
	)
}

export default CommomRoutes