import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { Button } from './Button';

type PropsTypeAddTask = {
    addTask: (valueInput: string) => void
}

export const AddTask: FC<PropsTypeAddTask> = ({ addTask }) => {

    const [valueInput, setValueInput] = useState<string>('');

    const eventAddTask = () => {
        addTask(valueInput)
        setValueInput('')
    }

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') eventAddTask()
    }

    const onClickHandler = () => {
        eventAddTask()
    }

    return (
        <div>
            <input
                onKeyDown={onKeyDownHandler}
                value={valueInput}
                onChange={onChangeHandlerInput}
            />
            <Button
                onClick={onClickHandler}
                title='+'
            />
        </div>
    );
};