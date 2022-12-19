import React, { useState, useEffect } from 'react'
import IRelease from 'interfaces/IRelease'
import http from 'services/http'

interface Props {
	releases: IRelease[] | null,
	setReleases: React.Dispatch<React.SetStateAction<IRelease[] | null>>,
	addRelease: (release: IRelease) => void
}

const ReleasesContext = React.createContext<Props>({} as Props)
ReleasesContext.displayName = 'ReleasesContext'

export const ReleasesProvider = ({children}: {children: JSX.Element}) => {
	const [releases, setReleases] = useState<IRelease[] | null>(null)

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
	}, []) //Servidor deveria ter endpoint para retornar somente dados do currente usuário

	const addRelease = (release: IRelease) => {
		return console.log(release)
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