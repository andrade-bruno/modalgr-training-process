import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import './main.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [teammates, setTeammates] = useState([]);

    const handleSubmit = teammate => {
        setTeammates([...teammates, teammate]);
        console.log('Colaboradores:', teammates);
        toast(`${teammate.name} cadastrado`);
    };

    return (
        <>
            <div className='app'>
                <Banner />
                <Form onSubmit={handleSubmit} />
                <ToastContainer
                    position='top-center'
                    autoClose={2500}
                    closeButton={false}
                    hideProgressBar={false}
                    rtl={false}
                    draggable
                    theme='dark'
                />
            </div>
        </>
    );
}

export default App;
