import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false)

    const toggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Portal>
                    <Modal
                        isOpen={isAuthModal}
                        onClose={() => toggleModal()}
                    />
                </Portal>

                <Button
                    className={cls.authButton}
                    theme={ButtonTheme.OUTLINE}
                    onClick={() => toggleModal()}
                >
                    {t('Войти')}
                </Button>
            </div>
        </div>
    );
};
