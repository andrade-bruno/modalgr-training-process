import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'

import Home from './paginas/Home'
import VitrineRestaurantes from './paginas/VitrineRestaurantes'
import AdminRestaurantes from './paginas/Admin/Restaurantes'
import FormularioRestaurante from './paginas/Admin/FormularioRestaurante/index'
import PaginaBase from './paginas/Admin/PaginaBase'
import AdminPratos from './paginas/Admin/Pratos'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />
			
			<Route path='/admin' element={<PaginaBase />}> 
				{/* Nested route */}
				<Route path='restaurantes' element={<AdminRestaurantes />} />
				<Route path='restaurantes/novo' element={<FormularioRestaurante />} />
				<Route path='restaurantes/:id' element={<FormularioRestaurante />} />
				<Route path='pratos' element={<AdminPratos />} />
			</Route>
		</Routes>
	</BrowserRouter>
	, document.getElementById('root')
)
