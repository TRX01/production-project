import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props

    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(true)

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className]) }
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggle}
                theme={ButtonTheme.CLEAR}
            >
                {t('Развернуть')}
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
