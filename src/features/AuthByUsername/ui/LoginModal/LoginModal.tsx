import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Loader } from 'shared/ui/Loader/Loader';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose } = props

    const loader = <div><Loader /></div>

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <div>
                <Suspense fallback={loader}>
                    <LoginFormAsync />
                </Suspense>
            </div>
        </Modal>
    );
};
