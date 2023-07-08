import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, reducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer, ProfileCard } from 'enteties/profile';
import { fetchProfileData } from 'enteties/Profile/model/services/fetchProfileData/fetchProfileData';
import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const reducers: reducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
