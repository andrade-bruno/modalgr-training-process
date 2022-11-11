import React, { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Input from '../Input';
import './index.css';

export default function Form(props) {
    const nameList = [
        { key: 1, value: 'Programação' },
        { key: 2, value: 'Front-end' },
        { key: 3, value: 'Data Science' },
        { key: 4, value: 'DevOps' },
        { key: 5, value: 'Mobile' },
        { key: 6, value: 'Inovação e Gestão' },
    ];

    const handleForm = e => {
        e.preventDefault();
        props.onSubmit({
            name,
            role,
            imageUrl,
            team,
        });
    };

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [imageUrl, setImage] = useState('');
    const [team, setTeam] = useState('');

    return (
        <form className='form' onSubmit={handleForm}>
            <h1>Prencha os dados para criar o card do colaborador</h1>
            <Input
                name='Nome'
                type='text'
                placeholder='Digite seu nome'
                required={true}
                onChange={val => setName(val)}
                value={name}
            />
            <Input
                name='Cargo'
                type='text'
                placeholder='Digite seu cargo'
                required={true}
                onChange={val => setRole(val)}
                value={role}
            />
            <Input
                name='Imagem'
                type='text'
                placeholder='Informe o endereço de imagem'
                required={true}
                onChange={val => setImage(val)}
                value={imageUrl}
            />
            <Dropdown
                name='Time'
                data={nameList}
                required={true}
                value={team}
                onChange={val => setTeam(val)}
            />
            <Button>Finalizar</Button>
        </form>
    );
}
