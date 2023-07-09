import { ListItemIcon } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';
import React from 'react';

interface IFitListItemIcon extends IDefaultMuiProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    autoFocus?: boolean;
    style?: React.CSSProperties;
}

const FitListItemIcon = (props: IFitListItemIcon) => {
    const { children, onClick, autoFocus, style } = props;
    return <ListItemIcon {...props} children={children} onClick={onClick} autoFocus={autoFocus} style={style} />;
};

export default FitListItemIcon;
