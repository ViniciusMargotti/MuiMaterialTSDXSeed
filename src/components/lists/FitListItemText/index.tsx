import { ListItemText } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';
import React from 'react';

interface IFitListItemIcon extends IDefaultMuiProps {
    children?: React.ReactNode;
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    autoFocus?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    inset?: boolean;
}

const FitListItemText = (props: IFitListItemIcon) => {
    const { children, primary, secondary, autoFocus, onClick, inset } = props;
    return (
        <ListItemText
            {...props}
            children={children}
            primary={primary}
            secondary={secondary}
            autoFocus={autoFocus}
            onClick={onClick}
            inset={inset}
        />
    );
};

export default FitListItemText;
