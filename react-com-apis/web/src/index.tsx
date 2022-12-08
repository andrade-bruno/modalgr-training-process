import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'

import Home from './paginas/Home'
import VitrineRestaurantes from './paginas/VitrineRestaurantes'

import PaginaBase from './paginas/Admin/PaginaBase'
import AdminRestaurantes from './paginas/Admin/Restaurantes'
import FormularioRestaurante from './paginas/Admin/FormularioRestaurante/index'
import AdminPratos from './paginas/Admin/Pratos'
import FormularioPrato from './paginas/Admin/FormularioPrato'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />
			
			<Route path='/admin' element={<PaginaBase />}> 
				{/* Nested routes */}
				<Route path='restaurantes' element={<AdminRestaurantes />} />
				<Route path='restaurantes/novo' element={<FormularioRestaurante />} />
				<Route path='restaurantes/:id' element={<FormularioRestaurante />} />
				<Route path='pratos' element={<AdminPratos />} />
				<Route path='pratos/novo' element={<FormularioPrato />} />
				<Route path='pratos/:id' element={<FormularioPrato />} />
			</Route>
		</Routes>
	</BrowserRouter>
	, document.getElementById('root')
)
