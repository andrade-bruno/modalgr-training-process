import style from '../List.module.scss'

export default function ListItem(props: {item: {task: string, time: string}}) {
    const { task, time } = props.item

    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}