import './styles/index.scss'
import { useTheme } from './providers/themeProvider/index'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/navbar'
import { AppRouter } from 'app/providers/router'
import React, { Suspense, useEffect } from 'react'
import { Sidebar } from 'widgets/sidebar/index'
import { Loader } from 'shared/ui/Loader/Loader'

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error()
        }
    }, [])

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
