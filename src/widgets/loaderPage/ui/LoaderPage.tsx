import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoaderPage.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface LoaderPageProps {
    className?: string
}

export const LoaderPage = (props: LoaderPageProps) => {
    const { className } = props

    return (
        <div className={ classNames(cls.LoaderPage, {}, [className]) }>
            <Loader />
        </div>
    )
}
