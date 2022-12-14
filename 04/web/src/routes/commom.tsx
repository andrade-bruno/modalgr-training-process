import { Route, Routes } from 'react-router-dom'

const CommomRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>Home</h1>}/>
			<Route path='/login' element={<h1>Login</h1>} />
			<Route path='/signup' element={<h1>Cadastro</h1>} />
		</Routes>
	)
}

export default CommomRoutes