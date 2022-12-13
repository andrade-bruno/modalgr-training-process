
import { useSetRecoilState } from 'recoil'
import { filtroDeEventos } from '../state/atom'
import { IFiltroDeEventos } from './../interfaces/IFiltroEventos'

const useAtualizarFiltro = () => {
	const setFiltro = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos)

	return (novoFiltro: IFiltroDeEventos) => {
		return setFiltro(novoFiltro)	
	}
}

export default useAtualizarFiltro