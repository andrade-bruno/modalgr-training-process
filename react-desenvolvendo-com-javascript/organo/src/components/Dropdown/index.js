import './index.css';

export default function Dropdown(props) {
    const { name, data, required, onChange, value } = props;

    const handleValue = e => {
        onChange(e.target.value);
    };

    return (
        <div className='list'>
            <label>{name}</label>
            <select required={required} onChange={handleValue} value={value}>
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
