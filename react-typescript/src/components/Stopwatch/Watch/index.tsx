import style from './Watch.module.scss'

interface WatchProps {
    time: number | undefined
}

export default function Watch({time = 0}: WatchProps) {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minutesDozen, minutesUnit] = String(minutes).padStart(2, '0')
    const [secondsDozen, secondsUnit] = String(seconds).padStart(2, '0')
    return (
        <>
            <span className={style.number}>{minutesDozen}</span>
            <span className={style.number}>{minutesUnit}</span>
            <span className={style.divider}>:</span>
            <span className={style.number}>{secondsDozen}</span>
            <span className={style.number}>{secondsUnit}</span>
        </>
    )
}