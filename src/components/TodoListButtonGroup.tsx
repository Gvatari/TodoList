import { FC } from 'react';
import { Button } from './Button';

export const TodoListButtonGroup: FC = () => {
    return (
        <div>
            <Button title='All' />
            <Button title='Active' />
            <Button title='Completed' />
        </div>
    );
};
