import './index.css';

export default function Dropdown(props) {
    const { name, data } = props;

    return (
        <div className='list'>
            <label>{name}</label>
            <select>
                <option value=''>Selecione</option>
                {data.map(item => (
                    <option value={item.id}>{item.value}</option>
                ))}
            </select>
        </div>
    );
}
