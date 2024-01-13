import { FC } from 'react';
import { TasksType } from '../Todolist';

type PropsTypeTasksItems = {
    tasks: TasksType[]
    removeTask: (id: string) => void
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ tasks, removeTask }) => {

    const tasksMap = () => {
       return tasks.map(t =>
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone} />
                <span>{t.name}</span>
                <button onClick={() => { removeTask(t.id) }}>x</button>
            </li>
        )
    }

    return (
        <>
            {
                tasks.length ?
                    <ul>
                        {tasksMap()}
                    </ul>
                    : <span>Task list is empty</span>
            }
        </>
    );
};

