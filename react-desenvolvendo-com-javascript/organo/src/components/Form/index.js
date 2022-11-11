import React from 'react';
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

    return (
        <>
            <div className='form'>
                <form>
                    <h1>Prencha os dados para criar o card do colaborador</h1>
                    <Input
                        name='Nome'
                        type='text'
                        placeholder='Digite seu nome'
                    />
                    <Input
                        name='Cargo'
                        type='text'
                        placeholder='Digite seu cargo'
                    />
                    <Input
                        name='Imagem'
                        type='text'
                        placeholder='Informe o endereço de imagem'
                    />
                    <Dropdown name='Times' data={nameList} />
                </form>
            </div>
        </>
    );
}
