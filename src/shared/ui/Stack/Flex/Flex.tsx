import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
}

export const Flex = (props: FlexProps) => {
    const { className, children } = props;

    return (
        <div className={classNames(cls.Flex, {}, [className])}>
            {children}
        </div>
    );
};
