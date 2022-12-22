import React, { useState, useEffect } from 'react'
import ICollaborator from 'interfaces/ICollaborator'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'
import { useUserContext } from './UserContext'
import { toast } from 'react-toastify'
   
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
		if (token) getCollaborators()
	}, [token])

	const sortCollaboratorsByIdAsc = (collaborators: ICollaborator[]) => {
		return collaborators.sort((a, b) => a.id - b.id)
	}

	const getCollaborators = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<ICollaborator[]>('colaboradores', config)
			setCollaborators(res.data)
		} catch (error: any) {
			console.log('getCollaborators error: ', error)
			toast.error('Não foi possível obter a lista de colaboradores')
		}
	}

	const getCollaboratorById = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<ICollaborator>(`colaboradores/${id}`, config)
			return res.data
		} catch (error) {
			console.log('getCollaboratorById error: ', error)
			toast.error(`Não foi possível obter dados do colaborador #${id}`)
		} 
	}

	const getCollaboratorNameById = (id: number) => {
		if (collaborators) {
			const collaborator = collaborators.find(item => item.id === id)
			return collaborator?.nome ? collaborator.nome : `#${id} Usuário indefinido`
		}
	}

	const addColaborator = async (collaborator: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const { nome, email, senha, data_registro, nivel_id } = collaborator
		const main = new Promise((resolve, reject) => {
			http.post<ICollaborator>('colaboradores', {
				nome, email, senha, data_registro, ativo: true, nivel_id
			}, config)
				.then(res => {
					resolve(setCollaborators([...collaborators, res.data]))
				}).catch(error => {
					reject(console.log('addColaborator error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Colaborador adicionado com sucesso',
				error: 'Não foi possível adicionar o colaborador'
			}
		)
	}

	const updateCollaborator = async (id: number, collaborator: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const { nome, email, senha, data_registro, nivel_id } = collaborator
		const main = new Promise((resolve, reject) => {
			http.put<ICollaborator>(`colaborador/${id}`, {
				nome, email, senha, data_registro, ativo: true, nivel_id
			}, config)
				.then(res => {
					const updatedList = collaborators.filter(collaborator => collaborator.id !== id)
					updatedList.push(res.data)
					const final = sortCollaboratorsByIdAsc(updatedList)
					resolve(setCollaborators(final))
				}).catch(error => {
					reject(console.log('updateCollaborator error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: `${nome} atualizado(a) com sucesso!`,
				error: 'Não foi possível atualizar o colaborador'
			}
		)
	}

	const inactivateCollaborator = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const main = new Promise((resolve, reject) => {
			http.put<ICollaborator>(`colaborador/${id}`, {ativo: false}, config)
				.then(res => {
					const updatedList = collaborators.filter(collaborator => collaborator.id !== id)
					updatedList.push(res.data)
					const final = sortCollaboratorsByIdAsc(updatedList)
					resolve(setCollaborators(final))
				}).catch(error => {
					reject(console.log('inactivateCollaborator error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Usuário desativado com sucesso!',
				error: 'Não foi possível desativar o usuário'
			}
		)
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