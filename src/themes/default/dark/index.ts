import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    spacing: 4,
    palette: {
        mode: 'dark',
        contrastThreshold: 4.5,
        primary: {
            main: '#833ab4',
        },
        secondary: {
            main: '#4a148c',
        },
    },
});
