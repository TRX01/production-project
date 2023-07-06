import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, reducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'enteties/Profile';

const initialReducers: reducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    const { t } = useTranslation()
    
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                {t('Profile page')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage
