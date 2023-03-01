import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(true)

    const toggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={ classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className]) }>
            <Button
                onClick={toggle}
                theme={ButtonTheme.CLEAR}
            >
                Toggle
            </Button>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
