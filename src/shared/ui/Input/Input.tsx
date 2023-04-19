import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss'

export enum InputTheme {
    CLEAR = 'clear',
    BOTTOM_LINE = 'bottom_line'
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    theme?: InputTheme;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = (props: InputProps) => {
    const {
        theme = InputTheme.CLEAR,
        className,
        value,
        onChange,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props

    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus()
        }
    }, [autoFocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div>
            <input
                ref={ref}
                className={classNames(cls.Input, {}, [className, cls[theme]])}
                value={value}
                onChange={onChangeHandler}
                type={type}
                {...otherProps}
            />
        </div>
    );
};
