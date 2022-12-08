import React from 'react'
import { httpV1 } from '../../services/http'

import style from './ListaRestaurantes.module.scss'
import Restaurante from './Restaurante'
import IPaginacao from './../../interfaces/IPaginacao'
import IRestaurante from '../../interfaces/IRestaurante'

import { Button } from '@mui/material'

const ListaRestaurantes = () => {
	const [restaurantes, setRestaurantes] = React.useState<IRestaurante[]>([])
	const [proximaPagina, setProximaPagina] = React.useState('')

	const verMais = () => {
		httpV1.get<IPaginacao<IRestaurante>>(proximaPagina)
			.then(res => {
				setRestaurantes([...restaurantes, ...res.data.results])
				setProximaPagina(res.data.next)
			})
			.catch(err => console.log(err))
	}

	React.useEffect(() => {
		httpV1.get<IPaginacao<IRestaurante>>('restaurantes/')
			.then(res => {
				setRestaurantes(res.data.results)
				setProximaPagina(res.data.next)
			})
			.catch(err => console.log(err))
	}, [])

	return (
		<section className={style.ListaRestaurantes}>
			<h1>Os restaurantes mais <em>bacanas</em>!</h1>
			{restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
			{proximaPagina && 
				<Button
					onClick={() => verMais()}
					style={{ marginTop: 10 }}
					color='primary'
					variant='contained'
				>
					Ver mais
				</Button>
			}
		</section>
	)
}

export default ListaRestaurantes