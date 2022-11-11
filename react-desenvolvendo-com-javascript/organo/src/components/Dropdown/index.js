import './index.css';

export default function Dropdown(props) {
    const { name, data, required } = props;

    return (
        <div className='list'>
            <label>{name}</label>
            <select required={required}>
                <option key='default' value=''>
                    Selecione
                </option>
                {data.map(item => (
                    <option key={item.key} value={item.value}>
                        {item.value}
                    </option>
                ))}
            </select>
        </div>
    );
}
