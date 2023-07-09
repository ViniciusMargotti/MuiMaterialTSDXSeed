import React from 'react';
import { IFitButtonProps } from '../FitButton';
import { LoadingButton } from '@mui/lab';

interface IFitLoadingButton extends IFitButtonProps {
    loading: boolean;
}

const FitLoadingButton = (props: IFitLoadingButton) => {
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
        loading
    } = props;

    return (
        <LoadingButton
            {...props}
            loading={loading}
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

export default FitLoadingButton;