import { FC } from 'react';
import { Button } from './Button';
import { filteredTasksType } from '../App';

type TodoListButtonGroupPropsType = {
    changeFilterTasks: (filteredTasks: filteredTasksType) => void
}

export const TodoListButtonGroup: FC<TodoListButtonGroupPropsType> = ({changeFilterTasks}) => {

    const changeFilterHandlerCreator = (filter: filteredTasksType) => {
        return () => changeFilterTasks(filter)
    }

    return (
        <div>
            <Button onClick={changeFilterHandlerCreator("All")} title='All' />
            <Button onClick={changeFilterHandlerCreator('Active')} title='Active' />
            <Button onClick={changeFilterHandlerCreator('Completed')} title='Completed' />
        </div>
    );
};
