import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { ErrorPage } from 'widgets/errorPage/ui/ErrorPage'
import { LoaderPage } from 'widgets/loaderPage'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line n/handle-callback-err
    static getDerivedStateFromError (error: Error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo)
    }

    render () {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            // eslint-disable-next-line i18next/no-literal-string
            return <Suspense fallback={<LoaderPage/>}><ErrorPage/></Suspense>
        }

        return this.props.children
    }
}
