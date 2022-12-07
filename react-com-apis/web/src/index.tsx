import React from 'react'
import ReactDOM from 'react-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './index.css'

import Home from './paginas/Home'
import VitrineRestaurantes from './paginas/VitrineRestaurantes'
import AdminRestaurantes from './paginas/Admin/Restaurantes'
import FormularioRestaurante from './paginas/Admin/FormularioRestaurante/index'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />
			<Route path='/admin/restaurantes' element={<AdminRestaurantes />} />
			<Route path='/admin/restaurantes/novo' element={<FormularioRestaurante />} />
			<Route path='/admin/restaurantes/:id' element={<FormularioRestaurante />} />
		</Routes>
	</BrowserRouter>
	, document.getElementById('root')
)
