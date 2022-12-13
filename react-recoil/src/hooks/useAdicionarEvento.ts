import { useSetRecoilState } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { listaDeEventosState } from '../state/atom'
import { obterId } from '../commom/utils'

const useAdicionarEvento = () => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

	return (evento: IEvento) => {
		const hoje = new Date()
		if (evento.inicio < hoje) {
			throw new Error('Eventos não podem ser cadastrados com data menor do que a atual')
		}

		evento.id = obterId()
		return setListaDeEventos(antiga => [...antiga, evento])
	}
}

export default useAdicionarEvento