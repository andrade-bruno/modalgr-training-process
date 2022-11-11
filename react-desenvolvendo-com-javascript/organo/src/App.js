import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import './main.css';

function App() {
    const [teammates, setTeammates] = useState([]);

    const handleSubmit = teammate => {
        setTeammates([...teammates, teammate]);
    };

    return (
        <>
            <div className='app'>
                <Banner />
                <Form onSubmit={handleSubmit} />
            </div>
        </>
    );
}

export default App;
