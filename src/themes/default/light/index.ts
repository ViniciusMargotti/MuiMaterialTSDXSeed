import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    spacing: 4,
    palette: {
        mode: 'light',
        contrastThreshold: 4.5,
        primary: {
            main: '#833ab4',
        },
        secondary: {
            main: '#4a148c',
        },
    },
});