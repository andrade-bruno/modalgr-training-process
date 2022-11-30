import React from 'react';
import style from './List.module.scss'
import ListItem from './ListItem';
 
const List = () => {
    const [tasks, setTasks] = React.useState(
        [
            {
                title: 'React',
                time: '01:00:00'
            },
            {
                title: 'Javascript',
                time: '02:00:00'
            },
            {
                title: 'Typescript',
                time: '02:00:00'
            }
        ]
    )

    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </ul>
        </aside>
    );
}
 
export default List;