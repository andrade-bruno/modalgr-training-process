import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { BrowserRouter } from 'react-router-dom'
import AdminRoutes from 'routes/admin'
import CommomRoutes from 'routes/commom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

let route = 'commom'
route = 'admin'

root.render(
	<React.StrictMode>
		<BrowserRouter>
			{route === 'admin' ? <AdminRoutes /> : <CommomRoutes />}
		</BrowserRouter>
	</React.StrictMode>
)