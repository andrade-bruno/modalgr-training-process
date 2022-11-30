import style from '../List.module.scss'

export default function ListItem(props: {item: {title: string, time: string}}) {
    const { title, time } = props.item

    return (
        <li className={style.item}>
            <h3>{title}</h3>
            <span>{time}</span>
        </li>
    )
}