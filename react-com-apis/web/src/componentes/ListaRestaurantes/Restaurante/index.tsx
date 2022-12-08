import React from 'react'

import IRestaurante from '../../../interfaces/IRestaurante'
import Prato from '../Prato'
import estilos from './Restaurante.module.scss'
import { httpV1 } from './../../../services/http'
import IPrato from './../../../interfaces/IPrato'

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
	const [pratos, setPratos] = React.useState<IPrato[]>([])

	React.useEffect(() => {
		httpV1.get<IPrato[]>(`restaurantes/${restaurante.id}/pratos/`)
			.then(res => setPratos(res.data))
			.catch(err => console.log(err))
	}, [restaurante])

	return (<section className={estilos.Restaurante}>
		<div className={estilos.Titulo}>
			<h2>{restaurante.nome}</h2>
		</div>
		<div>
			{pratos?.map(item => <Prato prato={item} key={item.id} />)}
		</div>
	</section>)
}

export default Restaurante