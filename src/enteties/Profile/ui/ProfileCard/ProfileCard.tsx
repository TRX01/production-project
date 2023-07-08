import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { profileActions } from 'enteties/profile';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);

    const dispatch = useDispatch()
    
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <span>
                    {t('Профиль')}
                </span>
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstname || ''}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={(value) => dispatch(profileActions.setFirstname(value))}
                />
                <Input
                    value={data?.lastname || ''}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={(value) => dispatch(profileActions.setLastname(value))}
                />
            </div>
        </div>
    );
};
