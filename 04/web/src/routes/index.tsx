import { Route, Routes, BrowserRouter } from 'react-router-dom'

import NotFound from 'pages/NotFound'
import DefaultPage from 'pages/Default'
import Dashboard from 'pages/Dashboard'

const CommomRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DefaultPage />}>
					<Route path='login' element={<h1>Login</h1>} />
					<Route path='signup' element={<h1>Cadastro</h1>} />
					<Route path='myreleases' element={<h1>Meus Lançamentos</h1>} />
				</Route>
				<Route path='/admin' element={<DefaultPage />}>
					<Route index element={<h1>Main Admin</h1>} />
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='releases' element={<h1>Lançamentos</h1>} />
					<Route path='users' element={<h1>Lista de usuários</h1>} />
					<Route path='docs' element={<h1>Docs</h1>} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default CommomRoutes