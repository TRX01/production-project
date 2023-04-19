import { classNames } from 'shared/lib/classNames/classNames';
import React, { useCallback, useEffect, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy = false,
    } = props

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown])

    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={e => onContentClick(e)}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
