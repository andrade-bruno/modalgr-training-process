import React from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Input from '../Input';
import './index.css';

export default function Form() {
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
        console.log('submit success');
    };

    return (
        <form className='form' onSubmit={handleForm}>
            <h1>Prencha os dados para criar o card do colaborador</h1>
            <Input
                name='Nome'
                type='text'
                placeholder='Digite seu nome'
                required={true}
            />
            <Input
                name='Cargo'
                type='text'
                placeholder='Digite seu cargo'
                required={true}
            />
            <Input
                name='Imagem'
                type='text'
                placeholder='Informe o endereço de imagem'
                required={true}
            />
            <Dropdown name='Times' data={nameList} />
            <Button>Finalizar</Button>
        </form>
    );
}
