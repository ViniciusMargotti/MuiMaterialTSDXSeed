import React from 'react';
import { CircularProgress } from '@mui/material';
import { IDefaultMuiProps } from '../../interfaces';

interface IFitBackdropProps extends IDefaultMuiProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit' | undefined;
    size?: number | string | undefined;
    variant?: 'determinate' | 'indeterminate' | undefined;
    value?: number | undefined;
}

const FitCircularProgress = (props: IFitBackdropProps) => {
    const { color, value, variant, size } = props;
    return <CircularProgress {...props} color={color} size={size} variant={variant} value={value} />;
};

export default FitCircularProgress;