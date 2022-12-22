import React, { useState } from 'react'
import IRelease from 'interfaces/IRelease'
import http from 'services/http'
import { useUserContext } from './UserContext'
import { AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'
interface Props {
	releases: IRelease[]
	getReleases: () => void
	getReleaseById: (id: number) => Promise<IRelease | undefined>
	setReleases: React.Dispatch<React.SetStateAction<IRelease[]>>
	addRelease: (km: number, tempo: number) => void
	removeRelease: (id: number) => void
	updateRelease: (releaseId: number, km: number, tempo: number) => void
}

const ReleasesContext = React.createContext<Props>({} as Props)
ReleasesContext.displayName = 'ReleasesContext'

export const ReleasesProvider = ({children}: {children: JSX.Element}) => {
	const [releases, setReleases] = useState<IRelease[]>([])

	const { user, token } = useUserContext()
	let config: AxiosRequestConfig

	const sortReleasesByIdAsc = (releases: IRelease[]) => {
		return releases.sort((a, b) => a.id - b.id)
	}

	const getReleases = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const main = new Promise((resolve, reject) => {
			http.get<IRelease[]>('lancamentos', config)
				.then(res => {
					setReleases(res.data)
					setTimeout(resolve, 1)
				})
				.catch(error => {
					console.log('getReleases error', error)
					setTimeout(reject, 1)
				})
		})
		toast.promise(
			main,
			{
				error: 'Não foi possível obter os lançamentos'
			}
		)
	}

	const getReleaseById = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IRelease>(`lancamentos/${id}`, config)
			return res.data
		} catch (error) {
			toast.error('Não foi possível obter os dados do lançamento')
			console.log('getReleaseById error: ', error)
		}
	}

	const addRelease = async (km: number, tempo: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		const main = new Promise((resolve, reject) => {
			http.post('lancamentos', {
				km, tempo, colaborador_id: user.id
			}, config)
				.then(res => {
					setReleases([...releases, res.data])
					setTimeout(resolve, 1)
				}).catch(error => {
					console.log('addRelease error: ', error)
					setTimeout(reject, 1)
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Lançamento adicionado com sucesso',
				error: 'Não foi possível adicionar o lançamento'
			}
		)
	}

	const removeRelease = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		const main = new Promise((resolve, reject) => {
			http.delete(`lancamentos/${id}`, config)
				.then(() => {
					const filtered = releases.filter(release => release.id !== id)
					setReleases(filtered)
					setTimeout(resolve, 1)
				}).catch(error => {
					console.log('removeRelease error: ', error)
					setTimeout(reject, 1)
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: `Lançamento #${id} removido com sucesso`,
				error: `Não foi possível remover o lançamento #${id}`
			}
		)
	}

	const updateRelease = async (releaseId: number, km: number, tempo: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		const main = new Promise((resolve, reject) => {
			http.put<IRelease>(`lancamentos/${releaseId}`, {
				km, tempo, colaborador_id: user.id
			}, config)
				.then(res => {
					const updatedList = releases.filter(release => release.id !== releaseId)
					updatedList.push(res.data)
					const final = sortReleasesByIdAsc(updatedList)
					setReleases(final)
					setTimeout(resolve, 1)
				}).catch(error => {
					console.log('updateRelease error: ', error)
					setTimeout(reject, 1)
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: `Lançamento #${releaseId} atualizado com sucesso`,
				error: `Não foi possível atualizar o lançamento #${releaseId}`
			}
		)
	}

	return (
		<ReleasesContext.Provider value={{
			releases, setReleases, getReleases, getReleaseById, addRelease, removeRelease, updateRelease
		}}>
			{children}
		</ReleasesContext.Provider>
	)
}

export const useReleasesContext = () => {
	return React.useContext(ReleasesContext)
}