import React from 'react';
import Button from 'components/Button';
import './style.scss'

class Form extends React.Component {
    render() {
        return (
            <form className='newTask'>
                <div className='inputContainer'>
                    <label htmlFor='task'>Adicione um novo estudo</label>
                    <input
                        type='text'
                        name='task'
                        id='task'
                        placeholder='O que você quer estudar'
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label htmlFor='time'>Tempo</label>
                    <input
                        type='time'
                        step='1'
                        name='time'
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Button>Finalizar</Button>
            </form>
        );
    }
}

export default Form;