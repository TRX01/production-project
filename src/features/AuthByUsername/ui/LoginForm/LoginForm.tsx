import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getUserLoginForm';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { memo, useCallback } from 'react';
import type {} from 'redux-thunk/extend-redux'
import cls from './LoginForm.module.scss'

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.firstInput}
                placeholder={t('Имя пользователя')}
                onChange={onChangeUsername}
                value={username}
                theme={InputTheme.BOTTOM_LINE}
                autoFocus
            />
            <Input
                type="text"
                className={cls.secondInput}
                placeholder={t('Пароль')}
                onChange={onChangePassword}
                value={password}
                theme={InputTheme.BOTTOM_LINE}
            />

            <span className={classNames(cls.error, { [cls.errorActive]: error }, [])}>
                {t('Вы ввели неверный логин или пароль')}
            </span>

            <Button
                theme={ButtonTheme.OUTLINE_PURPLE}
                className={cls.btn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
