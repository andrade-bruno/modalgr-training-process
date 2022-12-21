import { Route, Routes, BrowserRouter } from 'react-router-dom'

import NotFound from 'pages/NotFound'
import Default from 'pages/Default'
import Dashboard from 'pages/Dashboard'
import Collaborators from 'pages/Collaborators'
import Releases from 'pages/Releases'
import MyReleases from 'pages/MyReleases'
import SignUp from 'pages/SignUp'
import SignIn from 'pages/SignIn'
import Docs from 'pages/Docs'

import { UserProvider } from 'contexts/UserContext'
import { ReleasesProvider } from 'contexts/ReleasesContext'

const CommomRoutes = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<ReleasesProvider>
					<Routes>
						<Route path='/signin' element={<SignIn />} />
						<Route path='/signup' element={<SignUp />} />
						<Route path='/' element={<Default />}>
							<Route index element={<MyReleases />} />
							<Route path='docs' element={<Docs />} />
						</Route>
						<Route path='/admin' element={<Default />}>
							<Route path='dashboard' element={<Dashboard />} />
							<Route path='releases' element={<Releases />} />
							<Route path='collaborators' element={<Collaborators />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</ReleasesProvider>
			</UserProvider>
		</BrowserRouter>
	)
}

export default CommomRoutes