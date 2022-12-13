import { useRecoilValue } from 'recoil'
import { filtroDeEventos } from '../state/atom'

const useFiltro = () => {
	return useRecoilValue(filtroDeEventos)
}

export default useFiltro