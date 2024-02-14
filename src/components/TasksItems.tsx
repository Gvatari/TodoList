import { ChangeEvent, FC } from 'react';
import { TasksType, filteredTasksType } from '../Todolist';
import { v1 } from 'uuid';
import { Title } from './Title';
import s from './TaskItems.module.css'
import { Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

type PropsTypeTasksItems = {
    todoListId: string
    tasks: TasksType[]
    removeTask: (todoListId: string, id: string) => void
    changeTaskStatus: (todoListId: string, id: string, isDone: boolean) => void
    filteredTasks: filteredTasksType
    changeTaskName: (todoListId: string, taskId: string, name: string) => void
}

export const TasksItems: FC<PropsTypeTasksItems> = ({ todoListId, tasks, removeTask, changeTaskStatus, filteredTasks, changeTaskName }) => {

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

    const changeValueInputHandler = (taskId: string, name: string) => {
        changeTaskName(todoListId, taskId, name);
    };

    return (
        <>
            {
                tasks.length ?
                    <ul>
                        {tasksForTodolist.map(t => {
                            return <li key={t.id} className={`${s.taskBlock} ${t.isDone ? s.complited : ''}`}>
                                <Checkbox id={v1()} checked={t.isDone} onChange={(e) => changeTaskStatusHandler(todoListId, t.id, e)} color="secondary" />
                                <Title title={t.name} changeValueInput={(name: string) => changeValueInputHandler(t.id, name)} />
                                <IconButton onClick={removeTaskHandler(t.id)} aria-label="delete">
                                    <Delete />
                                </IconButton>
                            </li>
                        })}
                    </ul> :
                    <div style={{padding: '10px'}}>Task list is empty</div>
            }
        </>
    );
};

