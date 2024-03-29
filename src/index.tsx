import { Suspense } from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import App from './app/App';

import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <Suspense fallback="">
                        <App />
                    </Suspense>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
