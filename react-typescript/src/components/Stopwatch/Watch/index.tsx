import style from './Watch.module.scss'

export default function Watch() {
    return (
        <>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
            <span className={style.divider}>:</span>
            <span className={style.number}>0</span>
            <span className={style.number}>0</span>
        </>
    )
}