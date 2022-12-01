import React from 'react';
import Button from 'components/Button';
import style from './Form.module.scss'
import { ITask } from './../../@types/task';
import { v4 as uuidv4 } from 'uuid'

interface IForm {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
class Form extends React.Component<IForm> {
    state = {
        task: '',
        time: '00:00 AM'
    }

    addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.props.setTasks(previous => [
            ...previous, {...this.state, completed: false, selected: false, uuid: uuidv4()}
        ])
        this.setState({task: '', time: '00:00 AM' })
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
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
                <Button type='submit'>
                    Adicionar
                </Button>
            </form>
        );
    }
}

export default Form;