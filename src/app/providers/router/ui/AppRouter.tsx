import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routerConfig/routerConfig'
import { LoaderPage } from 'widgets/loaderPage'

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(RouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<LoaderPage />} >
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    )
}

export { AppRouter }
