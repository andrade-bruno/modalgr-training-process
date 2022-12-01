import style from './ListItem.module.scss'
import { ITask } from './../../../@types/task';

interface ListItemProps extends ITask {
    selectTask: (task: ITask) => void
}

export default function ListItem({task, time, selected, completed, uuid, selectTask}: ListItemProps) {
    return (
        <li className={`${style.item} ${selected ? style.selectedItem : ''} ${completed ? style.completedItem : ''}`} onClick={() => !completed && selectTask(
            {task, time, selected, completed, uuid}
        )}>
            <h3>{task}</h3>
            <span>{time}</span>
            {completed && 
            <span className={style.done}>
                <label aria-label='task done'></label>    
            </span>}
        </li>
    )
}