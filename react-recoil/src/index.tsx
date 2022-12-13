import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { RecoilRoot } from 'recoil'
import { Suspense } from 'react'
import DebugObserver from './debug'

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<DebugObserver />
			<Suspense fallback='Carregando...'>
				<App />
			</Suspense>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
)
