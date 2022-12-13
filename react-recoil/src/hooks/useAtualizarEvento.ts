
import { useSetRecoilState } from 'recoil'
import { IEvento } from './../interfaces/IEvento'
import { listaDeEventosState } from '../state/atom'

const useAtualizarEvento = () => {
	const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

	return (eventoAlterado: IEvento) => {
		setListaDeEventos(listaAntiga => {
			const idx = listaAntiga.findIndex(item => item.id === eventoAlterado.id)
			return [...listaAntiga.slice(0, idx), eventoAlterado, ...listaAntiga.slice(idx + 1)]
		})
	}
}

export default useAtualizarEvento