import React, { useState } from 'react'
import IRelease from 'interfaces/IRelease'
import http from 'services/http'
import { useUserContext } from './UserContext'
import { AxiosRequestConfig } from 'axios'
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

		try {
			const res = await http.get<IRelease[]>('lancamentos', config)
			setReleases(res.data)
		} catch (error) {
			console.log('getReleases error: ', error)
		}
	}

	const getReleaseById = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IRelease>(`lancamentos/${id}`, config)
			return res.data
		} catch (error) {
			console.log('getReleaseById error: ', error)
		} 
	}

	const addRelease = async (km: number, tempo: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		try {
			const res = await http.post('lancamentos', {
				km, tempo, colaborador_id: user.id
			}, config)
			setReleases([...releases, res.data])
		} catch (error) {
			console.log('addRelease error: ', error)
		}
	}

	const removeRelease = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		try {
			await http.delete(`lancamentos/${id}`, config)
			const filtered = releases.filter(release => release.id !== id)
			setReleases(filtered)
		} catch (error) {
			console.log('removeRelease error: ', error)
		}
	}

	const updateRelease = async (releaseId: number, km: number, tempo: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null
		
		try {
			const updatedRelease = await http.put<IRelease>(`lancamentos/${releaseId}`, {
				km, tempo, colaborador_id: user.id
			}, config)
			const updatedList = releases.filter(release => release.id !== releaseId)
			updatedList.push(updatedRelease.data)
			const final = sortReleasesByIdAsc(updatedList)
			setReleases(final)
		} catch (error) {
			console.log('removeRelease error: ', error)
		}
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