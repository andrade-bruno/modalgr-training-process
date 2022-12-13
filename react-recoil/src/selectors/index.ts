import { selector } from 'recoil'
import { filtroDeEventos, listaDeEventosState } from '../state/atom'
import { IEvento } from './../interfaces/IEvento'

export const eventosFiltradosState = selector({
	key: 'eventosFiltradosState',
	get: ({get}) => {
		const filtro = get(filtroDeEventos)
		const todosEventos = get(listaDeEventosState)

		const filtrados = todosEventos.filter(evento => {
			if (!filtro.data) {
				return true
			} else {
				const mesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
				return mesmoDia
			}
		})

		return filtrados
	}
})

export const eventosAsync = selector({
	key: 'eventosAsync',
	get: async () => {
		const res = await fetch('http://localhost:8000/eventos/')
		const eventosJson: IEvento[] = await res.json()
		return eventosJson.map(evento => ({
			...evento,
			inicio: new Date(evento.inicio),
			fim: new Date(evento.fim)
		}))
	}
})