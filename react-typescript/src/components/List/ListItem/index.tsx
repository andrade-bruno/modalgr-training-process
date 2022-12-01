import style from '../List.module.scss'
import { ITask } from './../../../@types/task';

export default function ListItem({task, time, selected, completed, uuid}: ITask) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}