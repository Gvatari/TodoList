import TextField from '@mui/material/TextField';
import { ChangeEvent, FC, useState } from 'react';

type PropsTypeTitle = {
    title: string
    changeValueInput: (title: string) => void
}

export const Title: FC<PropsTypeTitle> = ({ title, changeValueInput }) => {
    const [editingTitle, setEditingTitle] = useState(false)
    const [valueInput, setValueInput] = useState(title)

    const changedTitle = () => {
        setEditingTitle(!editingTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const onBlueHandler = () => {
        changeValueInput(valueInput)
        setEditingTitle(!editingTitle)
    }

    return (
        <h3>
            {
                !editingTitle ?
                    <span style={{color: '#a3a1a1'}} onDoubleClick={changedTitle}>{title}</span> :
                    <TextField autoFocus onBlur={onBlueHandler} onChange={onChangeHandler} value={valueInput} variant="outlined" size='small' />
            }

        </h3>
    );
};
