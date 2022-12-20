import React, { useState } from 'react'
import IRelease from 'interfaces/IRelease'
import http from 'services/http'
import { useUserContext } from './UserContext'
import { AxiosRequestConfig } from 'axios'
interface Props {
	releases: IRelease[]
	getReleases: () => void
	setReleases: React.Dispatch<React.SetStateAction<IRelease[]>>
	addRelease: (km: number, tempo: number) => void
}

const ReleasesContext = React.createContext<Props>({} as Props)
ReleasesContext.displayName = 'ReleasesContext'

export const ReleasesProvider = ({children}: {children: JSX.Element}) => {
	const [releases, setReleases] = useState<IRelease[]>([])

	const { user, token } = useUserContext()
	let config: AxiosRequestConfig

	const getReleases = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IRelease[]>('lancamentos', config)
			setReleases(res.data)
		} catch (error) {
			console.log('getReleases error: ', error)
		}
	}

	const addRelease = async (km: number, tempo: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		try {
			await http.post('lancamentos', {km, tempo, colaborador_id: user.id}, config)
				.then((res) => setReleases([...releases, res.data])) 
		} catch (error) {
			console.log('addRelease error: ', error)
		}
	}

	return (
		<ReleasesContext.Provider value={{releases, setReleases, getReleases, addRelease}}>
			{children}
		</ReleasesContext.Provider>
	)
}

export const useReleasesContext = () => {
	return React.useContext(ReleasesContext)
}