import { extendTheme } from '@chakra-ui/react';

const colors = {
    customLime: {
        50: '#FFFFD3',
        100: '#eaffc7',
        150: '#D7FF94',
        300: '#C4FF61',
        400: '#B1FF2E',
        600: '#2DB100',
        800: '#134B00',
    },
    blackAlpha: {
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.16)',
        400: 'rgba(0, 0, 0, 0.24)',
        600: 'rgba(0, 0, 0, 0.48)',
        700: 'rgba(0, 0, 0, 0.64)',
        800: 'rgba(0, 0, 0, 0.80)',
        900: 'rgba(0, 0, 0, 0.92)',
    },
    whiteAlpha: {
        100: '#FFFFFF/6',
    },
    customGray: {
        400: '#A0AEC0',
        700: '#2D3748',
    },
};

const breakpoints = {
    base: '0px',
    sm: '360px',
    md: '768px',
    lg: '1440px',
    xl: '1920px',
    '2xl': '1920px',
};

export const theme = extendTheme({
    colors,
    breakpoints,
    fonts: {
        heading: 'var(--font-family)',
        body: 'var(--font-family)',
        secondary: 'var(--second-family)',
    },
    styles: {
        global: {
            body: {
                margin: 0,
                padding: 0,
                fontFamily: 'var(--font-family)',
            },
        },
    },
});
