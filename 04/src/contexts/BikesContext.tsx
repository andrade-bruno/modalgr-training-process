import React, { useState, useEffect } from 'react'
import IBike from 'interfaces/IBike'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'
import { useUserContext } from './UserContext'
import { toast } from 'react-toastify'
   
interface Props {
	bikes: IBike[]
	getBikes: () => void
	getBikeById: (id: number) => Promise<IBike | undefined>
	addBike: (bike: addOrUpdateProps) => void
	updateBike: (id: number, bike: addOrUpdateProps) => void
	deleteBike: (id: number) => void
	inactivateBike: (id: number) => void
}

interface addOrUpdateProps {
	numero: number
	colaborador_id: number | null
	status: boolean | string
}

const BikesContext = React.createContext<Props>({} as Props)
BikesContext.displayName = 'BikesContext'

export const BikesProvider = ({children}: {children: JSX.Element}) => {
	const [bikes, setBikes] = useState<IBike[]>({} as IBike[])

	const { token, user } = useUserContext()
	let config: AxiosRequestConfig

	useEffect(() => {
		if (token && user.nivel_id === 2) getBikes()
	}, [token])

	const sortBikesByIdAsc = (bikes: IBike[]) => {
		return bikes.sort((a, b) => a.id - b.id)
	}

	const getBikes = async () => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IBike[]>('bicicletas', config)
			setBikes(res.data)
		} catch (error: any) {
			console.log('getBikes error: ', error)
			toast.error('Não foi possível obter a lista de bicicletas')
		}
	}

	const getBikeById = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		try {
			const res = await http.get<IBike>(`bicicletas/${id}`, config)
			return res.data
		} catch (error) {
			console.log('getBikeById error: ', error)
			toast.error(`Não foi possível obter dados da bicicleta #${id}`)
		} 
	}

	const addBike = async (bike: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const { numero, status } = bike
		let { colaborador_id } = bike

		colaborador_id = (colaborador_id == 0 || colaborador_id == null) ? null : colaborador_id

		const main = new Promise((resolve, reject) => {
			http.post<IBike>('bicicletas', {
				numero, colaborador_id, status
			}, config)
				.then(res => {
					resolve(setBikes([...bikes, res.data]))
				}).catch(error => {
					reject(console.log('addBike error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Bicicleta adicionada com sucesso',
				error: 'Não foi possível adicionar a bicicleta'
			}
		)
	}

	const updateBike = async (id: number, bike: addOrUpdateProps) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const { numero } = bike
		let { status, colaborador_id } = bike
		
		colaborador_id = (colaborador_id == 0 || colaborador_id == null) ? null : colaborador_id
		status = (status === 'true') || (status === true)

		if (colaborador_id) {
			toast.info('Não é possível desativar a bicicleta, a mesma está em uso.')
			return false
		}
		
		const main = new Promise((resolve, reject) => {
			http.put<IBike>(`bicicleta/${id}`, {
				numero, colaborador_id, status
			}, config)
				.then(res => {
					const updatedList = bikes.filter(bike => bike.id !== id)
					updatedList.push(res.data)
					const final = sortBikesByIdAsc(updatedList)
					resolve(setBikes(final))
				}).catch(error => {
					reject(console.log('updateBike error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: `Bicicleta #${numero} atualizada com sucesso!`,
				error: 'Não foi possível atualizar a bicicleta'
			}
		)
	}

	const inactivateBike = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const bike = await getBikeById(id)
		if (bike) {
			if (bike.colaborador_id) {
				toast.info('Não é possível desativar a bicicleta, a mesma está em uso.')
				return false
			}			
			bike.status = false
		}

		const main = new Promise((resolve, reject) => {
			http.put<IBike>(`bicicleta/${id}`, bike, config)
				.then(res => {
					const updatedList = bikes.filter(bike => bike.id !== id)
					updatedList.push(res.data)
					const final = sortBikesByIdAsc(updatedList)
					resolve(setBikes(final))
				}).catch(error => {
					reject(console.log('inactivateBike error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Bicicleta desativada com sucesso!',
				error: 'Não foi possível desativar a bicicleta'
			}
		)
	}

	const deleteBike = async (id: number) => {
		token ? config = {headers: {Authorization: `Bearer ${token}`}} : null

		const bike = await getBikeById(id)
		if (bike) {
			if (bike.colaborador_id) {
				toast.info('Não é possível remover a bicicleta, a mesma está em uso.')
				return false
			}			
		}

		const main = new Promise((resolve, reject) => {
			http.delete<IBike>(`bicicleta/${id}`, config)
				.then(() => {
					const updatedList = bikes.filter(bike => bike.id !== id)
					resolve(setBikes(updatedList))
				}).catch(error => {
					reject(console.log('deleteBike error: ', error))
				})
		})
		toast.promise(
			main,
			{
				pending: 'Aguarde...',
				success: 'Bicicleta removida com sucesso!',
				error: 'Não foi possível remover a bicicleta'
			}
		)
	}

	return (
		<BikesContext.Provider value={{
			bikes,
			getBikes,
			getBikeById,
			addBike,
			updateBike,
			deleteBike,
			inactivateBike
		}}>
			{children}
		</BikesContext.Provider>
	)
}

export const useBikesContext = () => {
	return React.useContext(BikesContext)
}