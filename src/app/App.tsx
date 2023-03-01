import './styles/index.scss'
import { useTheme } from './providers/themeProvider/index'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/navbar'
import { AppRouter } from 'app/providers/router'
import React, { Suspense } from 'react'
import { Sidebar } from 'widgets/sidebar/index'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={ classNames('app', {}, [theme]) }>
            <Suspense fallback="Loader...">
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
