import { FC } from 'react';
import { Button } from './Button';
import { filteredTasksType } from '../App';

type TodoListButtonGroupPropsType = {
    changeFilterTasks: (filteredTasks: filteredTasksType) => void
}

export const TodoListButtonGroup: FC<TodoListButtonGroupPropsType> = ({changeFilterTasks}) => {
    
    return (
        <div>
            <Button onClick={() => changeFilterTasks('All')} title='All' />
            <Button onClick={() => changeFilterTasks('Active')} title='Active' />
            <Button onClick={() => changeFilterTasks('Completed')} title='Completed' />
        </div>
    );
};
