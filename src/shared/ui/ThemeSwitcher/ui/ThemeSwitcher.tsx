import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
    small: boolean;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className,
        small,
    } = props

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <LightIcon className={`${small && cls.small} ${cls.sun}`} />
                : <DarkIcon className={`${small && cls.small} ${cls.moon}`} />}
        </Button>
    );
};
