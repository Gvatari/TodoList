import { FC } from 'react';
import { TasksType } from '../Todolist';
import { Button } from './Button';

type PropsTypeTasksItems = {
    tasks: TasksType[]
    removeTask: (id: string) => void
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ tasks, removeTask }) => {

    const tasksMap = () => {
        return (
            tasks.map(t => {
                const removeTaskHandler = () => removeTask(t.id)
                
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.name}</span>
                        <Button onClick={removeTaskHandler} title={'x'} />
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

