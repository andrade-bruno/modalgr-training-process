import React from 'react'
import { IEvento } from '../../../interfaces/IEvento'
import { useSetRecoilState } from 'recoil'
import { listaDeEventosStates } from './../../../state/atom'

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosStates)

	const alterarStatus = () => {
		evento.completo = !evento.completo

		setListaDeEventos(prev => {
			const idx = prev.findIndex(item => item.id === evento.id)
			return [...prev.slice(0, idx), evento, ...prev.slice(idx + 1)]
		})
	}

	const estilos = [
		'far',
		'fa-2x',
		evento.completo ? 'fa-check-square' : 'fa-square'
	]

	return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox