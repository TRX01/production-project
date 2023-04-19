import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_PURPLE = 'outline_purple',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        disabled,
        ...otherProps
    } = props;

    const ButtonClasses = classNames(
        cls.Button,
        { [cls.square]: square, [cls.disabled]: disabled },
        [className, cls[theme]],
    )

    return (
        <div>
            <button
                type="button"
                className={ButtonClasses}
                {...otherProps}
            >
                {children}
            </button>
        </div>
    );
};
