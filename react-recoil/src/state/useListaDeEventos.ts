
import { useRecoilValue } from 'recoil'
import { listaDeEventosStates } from './atom'

const useListaDeEventos = () => {
	return useRecoilValue(listaDeEventosStates)
}

export default useListaDeEventos