import React from 'react';
import { Button } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';

export interface IFitButtonProps extends IDefaultMuiProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    autoCapitalize?: string | undefined;
    autoFocus?: boolean | undefined;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained' | undefined;
    size?: 'small' | 'medium' | 'large' | undefined;
    disabled?: boolean;
}

const FitButton = (props: IFitButtonProps) => {
    const {
        children,
        onClick,
        style,
        type,
        autoFocus,
        autoCapitalize,
        color,
        endIcon,
        startIcon,
        size,
        variant,
        disabled,
    } = props;

    return (
        <Button
            {...props}
            fullWidth={true}
            onClick={onClick}
            disabled={disabled}
            children={children}
            style={style}
            type={type}
            color={color}
            startIcon={startIcon}
            endIcon={endIcon}
            variant={variant}
            size={size}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize}
        />
    );
};

export default FitButton;