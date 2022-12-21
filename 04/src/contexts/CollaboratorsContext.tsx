import React, { useState } from 'react'
import ICollaborator from 'interfaces/ICollaborator'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'
import { useUserContext } from './UserContext'
   
interface Props {
	collaborators: ICollaborator[]
	getCollaborators: () => void
}

const CollaboratorsContext = React.createContext<Props>({} as Props)
CollaboratorsContext.displayName = 'CollaboratorsContext'

export const UserProvider = ({children}: {children: JSX.Element}) => {
	const [collaborators, setCollaborators] = useState<ICollaborator[]>({} as ICollaborator[])

	const { token } = useUserContext()
	let config: AxiosRequestConfig

	const getCollaborators = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<ICollaborator[]>('colaboradores', config)
			setCollaborators(res.data)
		} catch (error) {
			console.log('getCollaborators error: ', error)
		}
	}

	return (
		<CollaboratorsContext.Provider value={{collaborators, getCollaborators}}>
			{children}
		</CollaboratorsContext.Provider>
	)
}

export const useCollaboratorsContext = () => {
	return React.useContext(CollaboratorsContext)
}