import React, { useState, useEffect } from 'react'
import ICollaborator from 'interfaces/ICollaborator'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'
import { useUserContext } from './UserContext'
   
interface Props {
	collaborators: ICollaborator[]
	getCollaborators: () => void
	getCollaboratorById: (id: number) => void
	getCollaboratorNameById: (id: number) => void
}

const CollaboratorsContext = React.createContext<Props>({} as Props)
CollaboratorsContext.displayName = 'CollaboratorsContext'

export const CollaboratorsProvider = ({children}: {children: JSX.Element}) => {
	const [collaborators, setCollaborators] = useState<ICollaborator[]>({} as ICollaborator[])

	const { token } = useUserContext()
	let config: AxiosRequestConfig

	useEffect(() => {
		getCollaborators()
	}, [])

	const getCollaborators = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<ICollaborator[]>('colaboradores', config)
			setCollaborators(res.data)
		} catch (error) {
			console.log('getCollaborators error: ', error)
		}
	}

	const getCollaboratorById = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<ICollaborator>(`colaboradores/${id}`, config)
			return res.data
		} catch (error) {
			console.log('getCollaboratorById error: ', error)
		} 
	}

	const getCollaboratorNameById = (id: number) => {
		const collaborator = collaborators.find(item => item.id === id)
		return collaborator?.nome
	}

	return (
		<CollaboratorsContext.Provider value={{
			collaborators, getCollaborators, getCollaboratorById, getCollaboratorNameById
		}}>
			{children}
		</CollaboratorsContext.Provider>
	)
}

export const useCollaboratorsContext = () => {
	return React.useContext(CollaboratorsContext)
}