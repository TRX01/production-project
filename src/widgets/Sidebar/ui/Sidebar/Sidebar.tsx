import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import ArrowIcon from 'shared/assets/icons/arrow.svg'
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation('sidebar');
    const sidebarClasses = classNames(
        cls.Sidebar,
        { [cls.collapsed]: collapsed },
        [className],
    )

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarList = useMemo(() => SidebarItemList.map(item => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed])

    return (
        <div
            data-testid="sidebar"
            className={sidebarClasses}
        >
            <div className={cls.items}>
                {sidebarList}
            </div>

            <div className={cls.switchers}>
                <div className={cls.themeSwitcher}>
                    <ThemeSwitcher small={collapsed} />
                </div>
                <LangSwitcher className={cls.lang} />
            </div>

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.sidebarToggle}
            >
                <ArrowIcon className={classNames(cls.arr, { [cls.left]: collapsed }, [])} />
            </Button>
        </div>
    );
});
