import { FC } from 'react';
import { TasksType } from '../Todolist';

type PropsTypeTasksItems = {
    tasks: Array<TasksType>
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ tasks }) => {
    return (
        <>
            {
                tasks.length ?
                    <ul>
                        {tasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone} />
                                    <span>{task.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                    : <span>Task list is empty</span>
            }
        </>
    );
};

