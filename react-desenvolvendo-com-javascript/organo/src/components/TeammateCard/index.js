import './index.css';

export default function TeammateCard(props) {
    const { name, role, imageUrl } = props;

    return (
        <div className='mate'>
            <div className='header'>
                <img src={imageUrl} alt={name} />
            </div>

            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}
