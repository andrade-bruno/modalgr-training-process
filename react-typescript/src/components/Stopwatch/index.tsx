import React from 'react'

import Button from "components/Button";
import style from './Stopwatch.module.scss'
import Watch from "./Watch";
import { timeToSeconds } from 'common/time';
import { ITask } from './../../@types/task';

interface StopwatchProps {
    selectedTask: ITask | undefined
}

export default function Stopwatch({selectedTask}: StopwatchProps) {
    const [time, setTime] = React.useState<number>()
    
    React.useEffect(() => {
        if (selectedTask?.time) {
            setTime(timeToSeconds(selectedTask?.time))
        }
    }, [selectedTask])

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Tempo {time}</p>

            <div className={style.watchWrapper}>
                <Watch />
            </div>

            <Button>Começar</Button>
        </div> 
    )
}