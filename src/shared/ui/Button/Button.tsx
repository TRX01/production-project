import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        theme,
        children,
        ...restProps
    } = props

    return (
        <button
            type='button'
            className={ classNames(cls.Button, {}, [className, cls[theme]]) }
            {...restProps}
        >
            {children}
        </button>
    )
}
