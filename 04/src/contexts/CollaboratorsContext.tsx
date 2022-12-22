import React, { useState, useEffect } from 'react'
import ICollaborator from 'interfaces/ICollaborator'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'
import { useUserContext } from './UserContext'
   
interface Props {
	collaborators: ICollaborator[]
	getCollaborators: () => void
	getCollaboratorById: (id: number) => Promise<ICollaborator | undefined>
	getCollaboratorNameById: (id: number) => void
	addColaborator: (collaborator: addOrUpdateProps) => void
	updateCollaborator: (id: number, collaborator: addOrUpdateProps) => void
	inactivateCollaborator: (id: number) => void
}

interface addOrUpdateProps {
	nome: ICollaborator['nome']
	email: ICollaborator['email']
	senha: string
	data_registro?: ICollaborator['data_registro']
	nivel_id: ICollaborator['nivel_id']
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

	const sortCollaboratorsByIdAsc = (collaborators: ICollaborator[]) => {
		return collaborators.sort((a, b) => a.id - b.id)
	}

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

	const addColaborator = async (collaborator: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const { nome, email, senha, data_registro, nivel_id } = collaborator
		try {
			const res = await http.post<ICollaborator>('colaboradores', {
				nome, email, senha, data_registro, ativo: true, nivel_id
			}, config)
			setCollaborators([...collaborators, res.data])
		} catch (error) {
			console.log('addColaborator error: ', error)
		} 
	}

	const updateCollaborator = async (id: number, collaborator: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const { nome, email, senha, data_registro, nivel_id } = collaborator
		try {
			const updatedCollaborator = await http.put<ICollaborator>(`colaborador/${id}`, {
				nome, email, senha, data_registro, ativo: true, nivel_id
			}, config)
			const updatedList = collaborators.filter(collaborator => collaborator.id !== id)
			updatedList.push(updatedCollaborator.data)
			const final = sortCollaboratorsByIdAsc(updatedList)
			setCollaborators(final)
		} catch (error) {
			console.log('updateCollaborator error: ', error)
		} 
	}

	const inactivateCollaborator = async (id: number) => {
		try {
			const updatedCollaborator = await http.put<ICollaborator>(`colaborador/${id}`, {ativo: false}, config)
			const updatedList = collaborators.filter(collaborator => collaborator.id !== id)
			updatedList.push(updatedCollaborator.data)
			const final = sortCollaboratorsByIdAsc(updatedList)
			setCollaborators(final)
		} catch (error) {
			console.log('inactivateCollaborator error: ', error)
		} 
	}

	return (
		<CollaboratorsContext.Provider value={{
			collaborators,
			getCollaborators,
			getCollaboratorById,
			getCollaboratorNameById,
			addColaborator,
			updateCollaborator,
			inactivateCollaborator
		}}>
			{children}
		</CollaboratorsContext.Provider>
	)
}

export const useCollaboratorsContext = () => {
	return React.useContext(CollaboratorsContext)
}