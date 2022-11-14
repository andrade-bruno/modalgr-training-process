import TeammateCard from '../TeammateCard';
import './index.css';

export default function Team(props) {
    return (
        props.teammates.length > 0 && (
            <section
                className='team'
                style={{ backgroundColor: props.secondaryColor }}
            >
                <h3 style={{ borderColor: props.primaryColor }}>
                    {props.name}
                </h3>

                <div className='teammates'>
                    {props.teammates.map(teammate => (
                        <TeammateCard
                            name={teammate.name}
                            role={teammate.role}
                            imageUrl={teammate.imageUrl}
                        />
                    ))}
                </div>
            </section>
        )
    );
}
