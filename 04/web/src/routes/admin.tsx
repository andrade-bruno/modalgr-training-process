import Dashboard from 'pages/Dashboard'
import { Routes, Route, Outlet } from 'react-router-dom'

const AdminRoutes = () => {
	return ( 
		<Routes>
			<Route path='/admin' element={<Outlet />}>
				<Route index element={<h1>Main Admin</h1>} />
				<Route path='dashboard' element={<Dashboard />} />
				<Route path='releases' element={<h1>Lançamentos</h1>} />
				<Route path='users' element={<h1>Lista de usuários</h1>} />
			</Route>
		</Routes>
	)
}
 
export default AdminRoutes