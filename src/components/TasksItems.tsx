import { ChangeEvent, FC } from 'react';
import { TasksType } from '../Todolist';
import { Button } from './Button';
import { v1 } from 'uuid';

type PropsTypeTasksItems = {
    tasks: TasksType[]
    removeTask: (id: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ tasks, removeTask, changeTaskStatus }) => {
    
    const removeTaskHandler = (id: string) => () => removeTask(id)

    const changeTaskStatusHandler = (id: string, e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(id, e.currentTarget.checked)
    }

    const tasksMap = () => {
        return (
            tasks.map(t => {
                return (
                    <li key={t.id}>
                        <input id={v1()} type="checkbox" onChange={(e) => changeTaskStatusHandler(t.id, e)} checked={t.isDone} />
                        <span>{t.name}</span>
                        <Button onClick={removeTaskHandler(t.id)} title={'x'} />
                    </li>
                )
            })
        )
    }

    return (
        <>
            {
                tasks.length ?
                    <ul>
                        {tasksMap()}
                    </ul> :
                    <span>Task list is empty</span>
            }
        </>
    );
};

