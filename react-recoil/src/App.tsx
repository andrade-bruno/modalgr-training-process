import style from './App.module.scss'
import Card from './components/Card'
import Formulario from './components/Formulario'
import Calendario from './components/Calendario'
import ListaDeEventos from './components/ListaDeEventos'

function App() {
	// const filtrados = !filtro
	// 	? eventos
	// 	: eventos.filter((evento) =>
	// 		filtro.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
	// 	)

	return (
		<div className={style.App}>
			<div className={style.Coluna}>
				<Card>
					<Formulario />
				</Card>
				<hr />
				<Card>
					<ListaDeEventos />
				</Card>
			</div>
			<div className={style.Coluna}>
				<Calendario />
			</div>
		</div>
	)
}

export default App
