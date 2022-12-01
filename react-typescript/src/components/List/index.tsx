import React from 'react';

import style from './List.module.scss'
import ListItem from './ListItem';
import { ITask } from './../../@types/task';

const List = ({tasks}: {tasks: ITask[]}) => {
    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <ListItem key={index} {...item} />
                ))}
            </ul>
        </aside>
    );
}
 
export default List;