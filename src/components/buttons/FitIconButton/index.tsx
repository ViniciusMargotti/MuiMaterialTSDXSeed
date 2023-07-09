import React from 'react';
import { IconButton } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';

interface IFitButtonProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'default' | undefined;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    autoFocus?: boolean;
    size?: 'small' | 'medium' | 'large' | undefined;
}

const FitIconButton = (props: IFitButtonProps & IDefaultMuiProps) => {
    const { children, onClick, color, style, disabled, autoFocus, size } = props;

    return (
        <IconButton
            {...props}
            size={size}
            children={children}
            style={style}
            color={color}
            disabled={disabled}
            onClick={onClick}
            autoFocus={autoFocus}
        />
    );
};

export default FitIconButton;