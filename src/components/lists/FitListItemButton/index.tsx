import React from 'react';
import { ListItemButton } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';

interface IFitListItemButton extends IDefaultMuiProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    disableTouchRipple?: boolean;
    centerRipple?: boolean;
    dense?: boolean;
    autoFocus?: boolean;
}

const FitListItemButton = (props: IFitListItemButton) => {
    const { onClick, disabled, disableTouchRipple, centerRipple, dense, autoFocus, children } = props;
    return (
        <ListItemButton
            {...props}
            children={children}
            onClick={onClick}
            disabled={disabled}
            disableTouchRipple={disableTouchRipple}
            centerRipple={centerRipple}
            dense={dense}
            autoFocus={autoFocus}
        />
    );
};

export default FitListItemButton;