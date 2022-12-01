import style from './ListItem.module.scss'
import { ITask } from './../../../@types/task';

interface ListItemProps extends ITask {
    selectTask: (task: ITask) => void
}

export default function ListItem({task, time, selected, completed, uuid, selectTask}: ListItemProps) {
    return (
        <li className={`${style.item} ${selected ? style.selectedItem : ''}`} onClick={() => selectTask(
            {task, time, selected, completed, uuid}
        )}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}