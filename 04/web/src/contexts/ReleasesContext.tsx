import React, { useState, useEffect } from 'react'
import IRelease from 'interfaces/IRelease'
import http from 'services/http'
import { useUserContext } from './UserContext'
interface Props {
	releases: IRelease[]
	setReleases: React.Dispatch<React.SetStateAction<IRelease[]>>
	addRelease: (km: number, tempo: number) => void
}

const ReleasesContext = React.createContext<Props>({} as Props)
ReleasesContext.displayName = 'ReleasesContext'

export const ReleasesProvider = ({children}: {children: JSX.Element}) => {
	const [releases, setReleases] = useState<IRelease[]>([])

	const { user, config } = useUserContext()

	const getReleases = async () => {
		try {
			await http.get<IRelease[]>('lancamentos')
				.then(res => setReleases(res.data)) 
		} catch (error) {
			console.log('getReleases error: ', error)
		}
	}

	useEffect(() => {
		getReleases()
	}, [])

	const addRelease = async (km: number, tempo: number) => {
		const colaborador_id = user.colaborador_id
		
		try {
			await http.post('lancamentos', {km, tempo, colaborador_id}, config)
				.then((res) => setReleases([...releases, res.data])) 
		} catch (error) {
			console.log('addRelease error: ', error)
		}
	}

	return (
		<ReleasesContext.Provider value={{releases, setReleases, addRelease}}>
			{children}
		</ReleasesContext.Provider>
	)
}

export const useReleasesContext = () => {
	return React.useContext(ReleasesContext)
}