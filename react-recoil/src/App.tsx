import React from 'react'
import style from './App.module.scss'
import Card from './components/Card'
import Formulario from './components/Formulario'
import { IEvento } from './interfaces/IEvento'
import Calendario from './components/Calendario'
import ListaDeEventos from './components/ListaDeEventos'
import { useRecoilValue } from 'recoil'
import { listaDeEventosStates } from './state/atom'

function App() {
	const [eventos, setEventos] = React.useState(useRecoilValue(listaDeEventosStates))
	const [filtro, setFiltro] = React.useState<Date | null>()

	const adicionarEvento = (evento: IEvento) => {
		evento.id = Math.round((new Date()).getTime() / 1000)
		eventos.push(evento)
		setEventos([...eventos])
	}
	const alterarStatusEvento = (id: number) => {
		const evento = eventos.find(evento => evento.id === id)
		if (evento) {
			evento.completo = !evento.completo
		}
		setEventos([...eventos])
	}
	const deletarEvento = (id: number) => {
		setEventos([...eventos.filter(evento => evento.id !== id)])
	}

	const aplicarFiltro = (data: Date | null) => {
		setFiltro(data)
	}

	const filtrados = !filtro
		? eventos
		: eventos.filter((evento) =>
			filtro.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
		)

	return (
		<div className={style.App}>
			<div className={style.Coluna}>
				<Card>
					<Formulario />
				</Card>
				<hr />
				<Card>
					<ListaDeEventos
						aoFiltroAplicado={aplicarFiltro}
						aoAlterarStatus={alterarStatusEvento}
						aoDeletarEvento={deletarEvento}
					/>
				</Card>
			</div>
			<div className={style.Coluna}>
				<Calendario />
			</div>
		</div>
	)
}

export default App
