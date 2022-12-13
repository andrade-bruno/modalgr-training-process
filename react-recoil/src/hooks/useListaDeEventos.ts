
import { useRecoilValue } from 'recoil'
import { eventosFiltradosState } from '../selector'

const useListaDeEventos = () => {
	return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos