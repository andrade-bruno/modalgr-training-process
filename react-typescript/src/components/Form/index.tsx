import React from 'react';
import Button from 'components/Button';
import style from './Form.module.scss'

class Form extends React.Component {
    state = {
        task: '',
        time: ''
    }

    render() {
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>Adicione um novo estudo</label>
                    <input
                        type='text'
                        name='task'
                        id='task'
                        placeholder='O que você quer estudar'
                        value={this.state.task}
                        onChange={e => this.setState({...this.state, task: e.target.value})}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>Tempo</label>
                    <input
                        type='time'
                        step='1'
                        name='time'
                        id='time'
                        min='00:00:00'
                        max='01:30:00'
                        value={this.state.time}
                        onChange={e => this.setState({...this.state, time: e.target.value})}
                        required
                    />
                </div>
                <Button onClick={() => alert('finalizado')}>
                    Adicionar
                </Button>
            </form>
        );
    }
}

export default Form;