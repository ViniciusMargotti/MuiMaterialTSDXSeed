import React from 'react';
import { Divider } from '@mui/material';
import { IDefaultMuiProps } from '../../interfaces';

interface IFitDivider extends IDefaultMuiProps {
    children?: React.ReactNode;
    light?: boolean;
    variant?: 'fullWidth' | 'inset' | 'middle';
    style?: React.CSSProperties;
}

const FitDivider = (props: IFitDivider) => {
    const { children, light, variant, style } = props;
    return <Divider {...props} children={children} style={style} light={light} variant={variant} />;
};
export default FitDivider;