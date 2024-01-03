import { FC } from 'react';

type propsTypeButton = {
    title: string
}

export const Button: FC<propsTypeButton> = ({ title }) => {
    return (
        <button>
            {title}
        </button>
    );
};