import { useState } from 'react';
import './index.css';

export default function Team(props) {
    const [teammates, setTeammates] = useState(props.teammates);

    return (
        <section className='team'>
            <h3>{props.name}</h3>

            {props.teammates.map((teammate, index) => (
                <div key={index}>
                    <br></br>
                    <p>{teammate.imageUrl}</p>
                    <p>{teammate.name}</p>
                    <p>{teammate.role}</p>
                </div>
            ))}
        </section>
    );
}
