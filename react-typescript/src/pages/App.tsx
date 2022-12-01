import React from 'react';
import style from './App.module.scss'

import Form from 'components/Form';
import List from 'components/List';
import Stopwatch from 'components/Stopwatch';
import { ITask } from './../@types/task';

const App = () => {
    const [tasks, setTasks] = React.useState<ITask[]>([])
    const [selectedTask, setSelectedTask] = React.useState<ITask >()

    const selectTask = (selectedTask: ITask) => {
        setSelectedTask(selectedTask)
        setTasks(previous => previous.map(task => ({
          ...task,
          selected: task.uuid === selectedTask.uuid ? true : false
        })))
    }

    const finishTask = () => {
      if (selectedTask) {
        setSelectedTask(undefined)
        setTasks(previous => previous.map(task => {
          if (task.uuid === selectedTask.uuid) {
            return {...task, selected: false, completed: true}
          }
          return task
        }))
      }
    }

    return (
        <div className={style.AppStyle}>
          <Form setTasks={setTasks} />
          <List
            tasks={tasks}
            selectTask={selectTask}
          />
          <Stopwatch
            selectedTask={selectedTask}
            finishTask={finishTask}
          />
        </div>
    );
}

export default App;
