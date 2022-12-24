import React, { useState, useEffect } from 'react'
import IAccessLevel from 'interfaces/IAccessLevel'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'
import { useUserContext } from './UserContext'
import { toast } from 'react-toastify'
import { useCollaboratorsContext } from './CollaboratorsContext'
   
interface Props {
	levels: IAccessLevel[]
	getLevels: () => void
	getLevelById: (id: number) => Promise<IAccessLevel | undefined>
	addLevel: (bike: addOrUpdateProps) => void
	updateLevel: (id: number, bike: addOrUpdateProps) => void
	deleteLevel: (id: number) => void
}

interface addOrUpdateProps {
	nivel: string
}

const AccessLevelsContext = React.createContext<Props>({} as Props)
AccessLevelsContext.displayName = 'AccessLevelsContext'

export const AccessLevelProvider = ({children}: {children: JSX.Element}) => {
	const [levels, setLevels] = useState<IAccessLevel[]>({} as IAccessLevel[])

	const { token, user } = useUserContext()
	const { collaborators } = useCollaboratorsContext()
	let config: AxiosRequestConfig

	useEffect(() => {
		if (token && user.nivel_id === 2) getLevels()
	}, [token])

	const sortAccessLevelsByIdAsc = (accessLevels: IAccessLevel[]) => {
		return accessLevels.sort((a, b) => a.id - b.id)
	}

	const getLevels = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IAccessLevel[]>('niveis', config)
			setLevels(res.data)
		} catch (error: any) {
			console.log('getLevels error: ', error)
			toast.error('Não foi possível obter a lista de níveis de acesso')
		}
	}

	const getLevelById = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IAccessLevel>(`niveis/${id}`, config)
			return res.data
		} catch (error) {
			console.log('getLevelById error: ', error)
			toast.error(`Não foi possível obter dados do nível de acesso #${id}`)
		} 
	}

	const addLevel = async ({nivel}: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const main = new Promise((resolve, reject) => {
			http.post<IAccessLevel>('niveis', {nivel}, config)
				.then(res => {
					resolve(setLevels([...levels, res.data]))
				}).catch(error => {
					reject(console.log('addLevel error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Nível de acesso adicionado com sucesso',
				error: 'Não foi possível adicionar o nível de acesso'
			}
		)
	}

	const updateLevel = async (id: number, {nivel}: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const main = new Promise((resolve, reject) => {
			http.put<IAccessLevel>(`niveis/${id}`, {nivel}, config)
				.then(res => {
					const updatedList = levels.filter(level => level.id !== id)
					updatedList.push(res.data)
					const final = sortAccessLevelsByIdAsc(updatedList)
					resolve(setLevels(final))
				}).catch(error => {
					reject(console.log('updateLevel error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: `Nível de acesso #${id} atualizado com sucesso!`,
				error: 'Não foi possível atualizar o nível de acesso'
			}
		)
	}

	const deleteLevel = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		if (collaborators.some(item => item.nivel_id === id)) {
			toast.info('Não é possível remover o nível de acesso, o mesmo está em uso.')
			return false
		}

		const main = new Promise((resolve, reject) => {
			http.delete<IAccessLevel>(`niveis/${id}`, config)
				.then(() => {
					const updatedList = levels.filter(level => level.id !== id)
					resolve(setLevels(updatedList))
				}).catch(error => {
					reject(console.log('deleteLevel error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Nível de acesso removido com sucesso!',
				error: 'Não foi possível remover o nível de acesso'
			}
		)
	}

	return (
		<AccessLevelsContext.Provider value={{
			levels,
			getLevels,
			getLevelById,
			addLevel,
			updateLevel,
			deleteLevel,
		}}>
			{children}
		</AccessLevelsContext.Provider>
	)
}

export const useAccessLevelsContext = () => {
	return React.useContext(AccessLevelsContext)
}