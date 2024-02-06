import { ChangeEvent, FC } from 'react';
import { TasksType, filteredTasksType } from '../Todolist';
import { Button } from './Button';
import { v1 } from 'uuid';

type PropsTypeTasksItems = {
    todoListId: string
    tasks: TasksType[]
    removeTask: (todoListId: string, id: string) => void
    changeTaskStatus: (todoListId: string, id: string, isDone: boolean) => void
    filteredTasks: filteredTasksType
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ todoListId, tasks, removeTask, changeTaskStatus, filteredTasks }) => {

    const removeTaskHandler = (id: string) => () => removeTask(todoListId, id)

    const changeTaskStatusHandler = (todoListId: string, id: string, e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(todoListId, id, e.currentTarget.checked)
    }

    const filterTasks = (allTasks: TasksType[], filterValue: filteredTasksType) => {
        switch (filterValue) {
            case 'Active':
                return allTasks.filter(t => !t.isDone)

            case 'Completed':
                return allTasks.filter(t => t.isDone)

            default:
                return allTasks
        }
    }

    let tasksForTodolist = filterTasks(tasks, filteredTasks);

    return (
        <>
            {
                tasks.length ?
                    <ul>
                        {tasksForTodolist.map(t => {
                            return <li key={t.id}>
                                <input id={v1()} type="checkbox" onChange={(e) => changeTaskStatusHandler(todoListId, t.id, e)} checked={t.isDone} />
                                <span>{t.name}</span>
                                <Button onClick={removeTaskHandler(t.id)} title={'x'} />
                            </li>
                        })}
                    </ul> :
                    <span>Task list is empty</span>
            }
        </>
    );
};

