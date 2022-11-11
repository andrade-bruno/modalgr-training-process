import React from 'react';
import Input from './../Input/';
import './index.css';

export default function Form() {
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
                </form>
            </div>
        </>
    );
}
