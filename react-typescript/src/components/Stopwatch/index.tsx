import Button from "components/Button";
import style from './Stopwatch.module.scss'
import Watch from "./Watch";

export default function Stopwatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>

            <div className={style.watchWrapper}>
                <Watch />
            </div>

            <Button>Começar</Button>
        </div> 
    )
}