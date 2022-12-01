import React from 'react';

import style from './List.module.scss'
import ListItem from './ListItem';
import { ITask } from './../../@types/task';

interface ListProps {
    tasks: ITask[],
    selectTask: (task: ITask) => void
}

const List = ({tasks, selectTask}: ListProps) => {
    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <ListItem
                        key={item.uuid}
                        {...item}
                        selectTask={selectTask}
                    />
                ))}
            </ul>
        </aside>
    );
}
 
export default List;