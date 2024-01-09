import { FC } from 'react';
import { TasksType } from '../Todolist';

type PropsTypeTasksItems = {
    tasks: Array<TasksType>
    removeTask: (id: number) => void
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ tasks, removeTask }) => {
    return (
        <>
            {
                tasks.length ?
                    <ul>
                        {
                            tasks.map(t =>
                                <li key={t.id}>
                                    <input type="checkbox" checked={t.isDone} />
                                    <span>{t.name}</span>
                                    <button onClick={() => { removeTask(t.id) }}>x</button>
                                </li>

                            )
                        }
                    </ul>
                    : <span>Task list is empty</span>
            }
        </>
    );
};

