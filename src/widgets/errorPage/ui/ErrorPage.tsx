import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ErrorPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

export const ErrorPage = () => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={ classNames(cls.ErrorPage, {}, []) }>
            <div className={cls.errorPageInfo}>
                {t('Произошла ошибка')}
                <Button
                    onClick={() => { reloadPage() }}
                    className={ classNames(cls.errorBtn) }
                >
                    {t('Обновить страницу')}
                </Button>
            </div>
        </div>
    )
}
