import { selector } from 'recoil'
import { filtroDeEventos, listaDeEventosState } from '../state/atom'

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