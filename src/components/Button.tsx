import { FC } from 'react';

type propsTypeButton = {
    title: string
    onClick: () => void;
    isDisabled?: boolean
}

export const Button: FC<propsTypeButton> = ({ title, isDisabled, onClick }) => {
    return (
        <button disabled={isDisabled} onClick={onClick}>
            {title}
        </button>
    );
};