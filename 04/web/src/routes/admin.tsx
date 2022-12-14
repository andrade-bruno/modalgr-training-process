import { Route, Routes } from 'react-router-dom'

import Dashboard from 'pages/Dashboard'
import DefaultPage from 'pages/Default'
import NotFound from 'pages/NotFound'

const AdminRoutes = () => {
	return ( 
		<Routes>
			<Route path='/admin' element={<DefaultPage />}>
				<Route index element={<h1>Main Admin</h1>} />
				<Route path='dashboard' element={<Dashboard />} />
				<Route path='releases' element={<h1>Lançamentos</h1>} />
				<Route path='users' element={<h1>Lista de usuários</h1>} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
 
export default AdminRoutes