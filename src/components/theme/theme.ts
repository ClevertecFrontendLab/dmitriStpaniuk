import { extendTheme } from '@chakra-ui/react';

const colors = {
    customLime: {
        50: '#FFFFD3',
        150: '#D7FF94',
        300: '#C4FF61',
        400: '#B1FF2E',
        600: '#2DB100',
        800: '#134B00',
    },
    blackAlpha: {
        200: '#000000/8',
        300: '#000000/16',
        600: '#000000/48',
        700: '#000000/64',
        800: '#000000/80',
        900: '#000000/92',
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
    base: '22.5em',
    sm: '22.5em',
    md: '48em',
    lg: '90em',
    xl: '120em',
};

export const theme = extendTheme({ colors, breakpoints });
