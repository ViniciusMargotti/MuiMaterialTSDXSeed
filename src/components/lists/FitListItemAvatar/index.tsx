import React from 'react';
import { ListItemAvatar } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';

interface IFitListItemAvatar extends IDefaultMuiProps {
    children: React.ReactNode;
    onClick?: () => void;
    autoFocus?: boolean;
    style?: React.CSSProperties;
}

const FitListItemAvatar = (props: IFitListItemAvatar) => {
    const { children, onClick, autoFocus, style } = props;
    return <ListItemAvatar {...props} children={children} onClick={onClick} autoFocus={autoFocus} style={style} />;
};

export default FitListItemAvatar;