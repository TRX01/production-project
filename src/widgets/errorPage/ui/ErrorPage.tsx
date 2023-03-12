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
            <div className={cls.PageInfo}>
                <div className={cls.SomeProblem}>
                    {t('Произошла ошибка')}
                </div>
                <Button
                    onClick={() => { reloadPage() }}
                    className={ cls.Btn }
                >
                    <div className={ cls.BtnReload }>
                        {t('Обновить страницу')}
                    </div>
                </Button>
            </div>
        </div>
    )
}
