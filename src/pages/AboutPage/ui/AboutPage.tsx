import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from 'shared/ui/Input/Input';

const AboutPage = () => {
    const { t } = useTranslation('about');

    const [value, setValue] = useState('')

    const onChange = (newValue: string) => {
        setValue(newValue)
    }

    return (
        <div>
            <Input
                placeholder={t('хихихихи')}
                value={value}
                onChange={onChange}
                theme={InputTheme.BOTTOM_LINE}
            />
        </div>
    );
};

export default AboutPage;
