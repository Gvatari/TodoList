import { FC } from 'react';
// import { Button } from './Button';
import { filteredTasksType } from '../Todolist';
import Button from '@mui/material/Button';

type TodoListButtonGroupPropsType = {
    todoListId: string
    filteredTasks: filteredTasksType
    changeFilterTasks: (todoListId: string, filteredTasks: filteredTasksType) => void
}

export const TodoListButtonGroup: FC<TodoListButtonGroupPropsType> = ({todoListId, changeFilterTasks, filteredTasks}) => {

    const changeFilterHandlerCreator = (todoListId: string, filter: filteredTasksType) => {
        return () => changeFilterTasks(todoListId, filter)
    }
    
    return (
        <div>
            <Button onClick={changeFilterHandlerCreator(todoListId, 'All')} variant={filteredTasks === 'All' ? 'outlined' : 'text'}>All</Button>
            <Button onClick={changeFilterHandlerCreator(todoListId, 'Active')} variant={filteredTasks === 'Active' ? 'outlined' : 'text'}>Active</Button>
            <Button onClick={changeFilterHandlerCreator(todoListId, 'Completed')} variant={filteredTasks === 'Completed' ? 'outlined' : 'text'}>Completed</Button>
        </div>
    );
};
