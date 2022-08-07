import { createStyles } from '@mantine/core';

interface NavItemProps {
    active: boolean
}

export const useStyles = createStyles((theme, { active }: NavItemProps) => ({
    navList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 16,
        marginLeft: 16,
    },

    navItem: {
        textDecoration: 'none',
        color: theme.colorScheme === 'light' ? theme.black : theme.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '12px',
        paddingTop: '12px',
        borderBottom: '1px solid gray',
        cursor: 'pointer',
        backgroundColor: active ? theme.colors.gold[7] : 'transparent',
        '&:hover': {
            color: 'white',
            backgroundColor: theme.colors.primary[7]
        }
    }
}));