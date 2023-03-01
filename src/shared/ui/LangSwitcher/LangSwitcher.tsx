import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LangSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import React from 'react'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props

    const { t, i18n } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <Button
                theme={ButtonTheme.CLEAR}
                className={classNames(cls.LangSwitcher, {}, [className])}
                onClick={changeLanguage}
            >
                {t('Язык')}
            </Button>
        </div>
    )
}
