import { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
// import { Button } from './Button';
import { v1 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type AddItemProps = {
    addItem: (valueInput: string) => void
}

export const AddItem: FC<AddItemProps> = ({ addItem }) => {

    const [valueInput, setValueInput] = useState<string>('');
    const [errorClass, setErrorClass] = useState<boolean>(false)

    const eventAddTask = () => {
        addItem(valueInput.trim())
        setValueInput('')
    }

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {        
        e.key === 'Enter' && valueInput.trim().length && eventAddTask()
        errorClassName()
    }

    const onClickHandler = () => {
        eventAddTask()
    }

    const errorClassName = () => {
        valueInput.trim().length === 0 ? setErrorClass(true) : setErrorClass(false)   
    }

    const styles = {
        maxWidth: '40px',
        maxHeight: '40px',
        minWidth: '40px',
        minHeight: '40px',
    }

    return (
        <div>
            <TextField
                error={!!errorClass}
                size="small"
                label={!errorClass ? 'Напишите...' : 'Не должно быть пусто...'}
                variant="outlined"
                id={v1()}
                onKeyUp={onKeyDownHandler}
                value={valueInput}
                onChange={onChangeHandlerInput}
            />
            <Button
                sx={styles}
                size="small"
                variant="contained"
                onClick={onClickHandler}
                disabled={!valueInput.trim()}
            >+</Button>
        </div>
    );
};