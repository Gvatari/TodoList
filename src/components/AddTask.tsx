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
        setValueInput(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && valueInput.length && eventAddTask()
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
                isDisabled={!valueInput}
            />
        </div>
    );
};