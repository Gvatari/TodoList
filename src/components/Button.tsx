import { FC } from 'react';

type propsTypeButton = {
    title: string
    onClick?: () => void;
}

export const Button: FC<propsTypeButton> = ({ title, onClick }) => {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
};