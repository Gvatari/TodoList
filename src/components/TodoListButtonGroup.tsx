import { FC } from 'react';
import { Button } from './Button';
import { filteredTasksType } from '../Todolist';

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
            <Button className={filteredTasks === 'All' ? '__active' : ''} onClick={changeFilterHandlerCreator(todoListId, 'All')} title='All' />
            <Button className={filteredTasks === 'Active' ? '__active' : ''} onClick={changeFilterHandlerCreator(todoListId, 'Active')} title='Active' />
            <Button className={filteredTasks === 'Completed' ? '__active' : ''} onClick={changeFilterHandlerCreator(todoListId, 'Completed')} title='Completed' />
        </div>
    );
};
