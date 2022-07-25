import { Text } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useStyles } from './styles'

interface IProps {
    children: ReactNode;
}

interface NavItemProp {
    href: string;
    children: string;
}

export function NavList({ children }: IProps) {
    const { classes } = useStyles({ active: false })
    return (
        <div className={classes.navList}>
            {children}
        </div>
    )
}

export function NavItem({ children, href }: NavItemProp) {
    const { pathname } = useRouter();
    const active = href === pathname;
    const { classes } = useStyles({ active });
    return (
        <Link href={href}>
            <a className={classes.navItem}>
                <Text sx={theme => ({ color: active ? theme.black : '', fontWeight: active ? 'bold' : 'normal' })}>{children}</Text>
            </a>
        </Link>
    )
}