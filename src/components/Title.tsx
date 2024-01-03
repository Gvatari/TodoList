import { FC } from 'react';

type PropsTypeTitle = {
    title: string
}

export const Title: FC<PropsTypeTitle> = ({title}) => {
    return (
        <h3>
            {title}
        </h3>
    );
};
