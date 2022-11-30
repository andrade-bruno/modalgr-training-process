import React from 'react';
import './style.scss'
 
const List = () => {
    let tasks = [
        {
            title: 'React',
            time: '01:00:00'
        },
        {
            title: 'Typescript',
            time: '02:00:00'
        }
    ]

    return (
        <aside className='taskList'>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className='item'>
                        <h3>{item.title}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
 
export default List;