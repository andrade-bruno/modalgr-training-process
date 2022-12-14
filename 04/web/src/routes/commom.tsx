import { Route, Routes } from 'react-router-dom'

import NotFound from 'pages/NotFound'
import DefaultPage from 'pages/Default'

const CommomRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<DefaultPage />}>
				<Route path='/login' element={<h1>Login</h1>} />
				<Route path='/signup' element={<h1>Cadastro</h1>} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default CommomRoutes