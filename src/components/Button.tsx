import { FC } from 'react';

type propsTypeButton = {
    title: string
    onClick: () => void;
    isDisabled?: boolean
    className?: string
}

export const Button: FC<propsTypeButton> = ({ title, isDisabled, className, onClick }) => {
    return (
        <button className={className} disabled={isDisabled} onClick={onClick}>
            {title}
        </button>
    );
};