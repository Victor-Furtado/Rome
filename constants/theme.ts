import { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
    colorScheme: 'dark',
    focusRing: 'auto',
    defaultRadius: 'sm',
    white: '#e6e7d7',
    black: '#3a603b',
    colors: {
        gold: ['#FBF9E3', '#F9F6D1', '#F5EEAD', '#F0E788', '#ECDF64', '#E7D840', '#D4C41B', '#A29614', '#71680E', '#3F3A08'],
        primary: ['#FFB6B6', '#FFA1A1', '#FF7878', '#FF5050', '#FF2727', '#FD0000', '#C50000', '#8D0000', '#550000', '#1D0000']
    },
    primaryColor: 'primary',
    // primaryShade: Shade | { light: Shade, dark: Shade },
    // fontFamily: string,
    // lineHeight: string | number,
    // transitionTimingFunction: string,
    // fontFamilyMonospace: string,
    // fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
    // radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
    // spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
    // shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>,
    // breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>,
    // headings: {
    //     fontFamily: CSSProperties['fontFamily'],
    //     fontWeight: CSSProperties['fontWeight'],
    //     sizes: {
    //         h1: { fontSize: CSSProperties['fontSize'], lineHeight: CSSProperties['lineHeight'] },
    //         h2: { fontSize: CSSProperties['fontSize'], lineHeight: CSSProperties['lineHeight'] },
    //         h3: { fontSize: CSSProperties['fontSize'], lineHeight: CSSProperties['lineHeight'] },
    //         h4: { fontSize: CSSProperties['fontSize'], lineHeight: CSSProperties['lineHeight'] },
    //         h5: { fontSize: CSSProperties['fontSize'], lineHeight: CSSProperties['lineHeight'] },
    //         h6: { fontSize: CSSProperties['fontSize'], lineHeight: CSSProperties['lineHeight'] },
    //     },
    // },
    // fn: MantineThemeFunctions,
    dir: 'ltr',
    loader: 'oval',
    dateFormat: 'DD/MM/YYYY',
    // other: Record<string, any>,
    datesLocale: 'pt-br'
}