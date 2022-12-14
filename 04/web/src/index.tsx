import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import AdminRoutes from 'routes/admin'
import CommomRoutes from 'routes/commom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AdminRoutes />
			<CommomRoutes />
		</BrowserRouter>
	</React.StrictMode>
)