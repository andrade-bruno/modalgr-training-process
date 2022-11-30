import React from 'react';
 
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
        <aside>
            {tasks.map((item, index) => (
                <li key={index}>
                    <h3>{item.title}</h3>
                    <span>{item.time}</span>
                </li>
            ))}
        </aside>
    );
}
 
export default List;