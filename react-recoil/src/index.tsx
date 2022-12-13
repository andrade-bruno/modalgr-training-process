import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<Suspense fallback='Carregando...'>
				<App />
			</Suspense>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
)
