import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'enteties/User/model/selectors/getUserAuthData';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorageConst';
import { userActions } from 'enteties/User';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch()

    const [isAuthModal, setIsAuthModal] = useState(false)
    const userAuth = useSelector(getUserAuthData)

    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    const onLogout = () => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        dispatch(userActions.logout())
        dispatch(loginActions.clearData())
        setIsAuthModal(false)
    }

    const NavbarContent = userAuth
        ? (
            <div>
                <Button
                    theme={ButtonTheme.OUTLINE_PURPLE}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </div>
        )
        : (
            <div>
                <Portal>
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={toggleModal}
                    />
                </Portal>

                <Button
                    className={cls.authButton}
                    theme={ButtonTheme.OUTLINE_PURPLE}
                    onClick={toggleModal}
                >
                    {t('Войти')}
                </Button>
            </div>
        )

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                {NavbarContent}
            </div>
        </div>
    );
};
