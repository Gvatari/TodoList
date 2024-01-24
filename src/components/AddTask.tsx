import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { Button } from './Button';
import { v1 } from 'uuid';

type PropsTypeAddTask = {
    addTask: (valueInput: string) => void
}

export const AddTask: FC<PropsTypeAddTask> = ({ addTask }) => {

    const [valueInput, setValueInput] = useState<string>('');
    const [errorClass, setErrorClass] = useState<boolean>(false)

    const eventAddTask = () => {
        addTask(valueInput.trim())
        setValueInput('')
    }

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        console.log(valueInput.length);
        
        e.key === 'Enter' && valueInput.trim().length && eventAddTask()
        errorClassName()
    }

    const onClickHandler = () => {
        eventAddTask()
    }

    const errorClassName = () => {
        valueInput.trim().length === 0 ? setErrorClass(true) : setErrorClass(false)   
    }

    return (
        <div>
            <input
                className={`add-task-input ${errorClass ? 'error' : ''}`}
                id={v1()}
                onKeyUp={onKeyDownHandler}
                value={valueInput}
                onChange={onChangeHandlerInput}
            />
            <Button
                onClick={onClickHandler}
                title='+'
                isDisabled={!valueInput.trim()}
            />
            {errorClass ? <div style={{ color: 'red' }}>Строка не должна быть пустой</div> : null}
        </div>
    );
};