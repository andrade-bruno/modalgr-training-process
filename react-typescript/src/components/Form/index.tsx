import React from 'react';
import Button from 'components/Button';
import style from './Form.module.scss'
import { ITask } from './../../@types/task';
import { v4 as uuidv4 } from 'uuid'

interface IForm {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form = (props: IForm) => {
    const [task, setTask] = React.useState('')
    const [time, setTime] = React.useState('')

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.setTasks(previous => [
            ...previous, { task, time, completed: false, selected: false, uuid: uuidv4()}
        ])
        setTask('')
        setTime('00:00 AM')
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>Adicione um novo estudo</label>
                <input
                    type='text'
                    name='task'
                    id='task'
                    placeholder='O que você quer estudar'
                    value={task}
                    onChange={e => setTask(e.target.value)}
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
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required
                />
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    );
}

export default Form;