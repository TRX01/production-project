import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'

enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinksTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinksTheme.PRIMARY,
        children,
        ...restProps
    } = props

    return (
        <Link
            to={to}
            className={ classNames(cls.AppLink, {}, [className, cls[theme]]) }
            {...restProps}
        >
            {children}
        </Link>
    )
}
