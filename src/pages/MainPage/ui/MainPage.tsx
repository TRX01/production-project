import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter/ui/Counter';

const MainPage = memo(() => {
    const { t } = useTranslation();

    return (
        <div>
            <Counter />
        </div>
    );
});

export default MainPage;
