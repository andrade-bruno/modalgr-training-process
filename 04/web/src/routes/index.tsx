import { Route, Routes, BrowserRouter } from 'react-router-dom'

import NotFound from 'pages/NotFound'
import Default from 'pages/Default'
import Dashboard from 'pages/Dashboard'

const CommomRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Default />}>
					<Route path='login' element={<h1>Login</h1>} />
					<Route path='signup' element={<h1>Cadastro</h1>} />
					<Route path='myreleases' element={<h1>Meus Lançamentos</h1>} />
				</Route>
				<Route path='/admin' element={<Default />}>
					<Route index element={<h1>Main Admin</h1>} />
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='releases' element={<h1>Lançamentos</h1>} />
					<Route path='collaborators' element={<h1>Colaboradores</h1>} />
					<Route path='docs' element={<h1>Documentação</h1>} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default CommomRoutes