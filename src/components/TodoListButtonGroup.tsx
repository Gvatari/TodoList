import { FC } from 'react';
import { Button } from './Button';
import { filteredTasksType } from '../Todolist';

type TodoListButtonGroupPropsType = {
    changeFilterTasks: (filteredTasks: filteredTasksType) => void
    filteredTasks: string
}

export const TodoListButtonGroup: FC<TodoListButtonGroupPropsType> = ({changeFilterTasks, filteredTasks}) => {

    const changeFilterHandlerCreator = (filter: filteredTasksType) => {
        return () => changeFilterTasks(filter)
    }
    
    return (
        <div>
            <Button className={filteredTasks === 'All' ? '__active' : ''} onClick={changeFilterHandlerCreator('All')} title='All' />
            <Button className={filteredTasks === 'Active' ? '__active' : ''} onClick={changeFilterHandlerCreator('Active')} title='Active' />
            <Button className={filteredTasks === 'Completed' ? '__active' : ''} onClick={changeFilterHandlerCreator('Completed')} title='Completed' />
        </div>
    );
};
