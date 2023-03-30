import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ArrowIcon from 'shared/assets/icons/arrow.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const sidebarClasses = classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
    )

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={sidebarClasses}
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <div className={cls.iconWrapper}>
                        <MainIcon className={cls.icon} />
                    </div>
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <div className={cls.iconWrapper}>
                        <AboutIcon className={cls.icon} />
                    </div>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <div className={cls.themeSwitcher}>
                    <ThemeSwitcher />
                </div>
                <LangSwitcher className={cls.lang} />
            </div>

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.sidebarToggle}
                theme={ButtonTheme.BACKGROUND}
            >
                <ArrowIcon className={classNames(cls.arr, { [cls.left]: collapsed }, [])} />
            </Button>
        </div>
    );
};
