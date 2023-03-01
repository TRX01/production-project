import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import LightIcon from 'shared/assets/icons/theme-light 1lighticon.svg'
import DarkIcon from 'shared/assets/icons/theme-dark 1darkicon.svg'
import { useTheme } from 'app/providers/themeProvider/lib/useTheme'
import { Theme } from 'app/providers/themeProvider'

interface ThemeSwicherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwicherProps) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cls.btnWrapper}>
            <Button
                className={ classNames(cls.ThemeSwitcher, {}, [className]) }
                theme={ButtonTheme.CLEAR}
                onClick={toggleTheme}
            >
                {theme === Theme.LIGHT
                    ? <LightIcon />
                    : <DarkIcon />
                }
            </Button>
        </div>
    )
}
