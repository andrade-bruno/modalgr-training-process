import React, { useState } from 'react'
import { IFiltroDeEventos } from '../../interfaces/IFiltroEventos'
import style from './Filtro.module.scss'
import useAtualizarFiltro from './../../hooks/useAtualizarFiltro'

const Filtro: React.FC = () => {
	const [data, setData] = useState('')
	const atualizarFiltro = useAtualizarFiltro()
  
	const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		const novoFiltro: IFiltroDeEventos = {}
		if (data) {
			novoFiltro.data = new Date(data)
		} else {
			novoFiltro.data = null
		}
		atualizarFiltro(novoFiltro)
	}

	return (<form className={style.Filtro} onSubmit={submeterForm}>
		<h3 className={style.titulo}>Filtrar por data</h3>
		<input 
			type="date" 
			name="data"
			className={style.input}
			onChange={evento => setData(evento.target.value)} 
			placeholder="Por data"
			value={data}
		/>

		<button className={style.botao}>
      Filtrar
		</button>

	</form>)
}

export default Filtro