import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './LoginModal.module.scss'

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose } = props

    const loader = <div className={cls.loader}><Loader /></div>

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            className={cls.loginModal}
        >
            <div className={cls.loginForm}>
                <Suspense fallback={loader}>
                    <LoginFormAsync />
                </Suspense>
            </div>
        </Modal>
    );
};
