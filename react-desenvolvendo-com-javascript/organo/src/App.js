import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import './main.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Team from './components/Team';

export const teamList = [
    { value: 'React', primaryColor: '#57C278', secondaryColor: '#D9F7E9' },
    {
        value: 'React Native',
        primaryColor: '#DB6EBF',
        secondaryColor: '#FAE9F5',
    },
    { value: 'Angular', primaryColor: '#E06B69', secondaryColor: '#FDE7E8' },
    { value: 'C#', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9' },
    { value: '.NET', primaryColor: '#82CFFA', secondaryColor: '#E8F8FF' },
    {
        value: 'Data Science',
        primaryColor: '#A6D157',
        secondaryColor: '#F0F8E2',
    },
    { value: 'DevOps', primaryColor: '#E06B69', secondaryColor: '#FDE7E8' },
    { value: 'Python', primaryColor: '#6278F7', secondaryColor: '#E8F8FF' },
    { value: 'UI/UX', primaryColor: '#DB6EBF', secondaryColor: '#FAE9F5' },
    { value: 'Mobile', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9' },
    {
        value: 'Inovação e Gestão',
        primaryColor: '#FF8A29',
        secondaryColor: '#FFEEDF',
    },
];

function App() {
    const [teammates, setTeammates] = useState([]);

    const handleSubmit = teammate => {
        setTeammates([...teammates, teammate]);
        toast(`${teammate.name} cadastrado`);
    };

    return (
        <>
            <div className='app'>
                <Banner />
                <Form onSubmit={handleSubmit} />

                {teamList.map(team => (
                    <Team
                        name={team.value}
                        primaryColor={team.primaryColor}
                        secondaryColor={team.secondaryColor}
                        teammates={teammates.filter(
                            teammate => teammate.team === team.value
                        )}
                    />
                ))}

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
