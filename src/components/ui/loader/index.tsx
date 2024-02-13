import Icon from '@public/loader.svg?react';
import cls from './loader.module.scss';

export const Loader = () => {
    return (
        <div className={cls.loader}>
            <Icon />
        </div>
    );
};
