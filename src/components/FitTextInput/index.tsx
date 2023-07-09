import React from 'react';
import { TextField } from '@mui/material';
import { IDefaultMuiProps } from '../../interfaces';

interface IFitTextInputProps extends IDefaultMuiProps {
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: unknown;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    required?: boolean;
    disabled?: boolean;
    variant?: 'standard' | 'filled' | 'outlined';
    color?: 'error' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | undefined;
    style?: React.CSSProperties;
    autoFocus?: boolean;
    size?: 'small' | 'medium';
    autoCapitalize?: string;
    type?: 'text' | 'password' | 'number' | 'email' | 'search' | 'tel' | 'url';
    autoComplete?: 'off' | 'on';
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    focused?: boolean;
    rows?: number;
    maxRows?: number;
    ref?: React.Ref<any>;
    children?: React.ReactNode;
    error?: boolean;
    helperText?: string;
}

const FitTextInput = (props: IFitTextInputProps) => {
    const {
        label,
        value,
        onChange,
        onClick,
        required,
        disabled,
        color,
        style,
        autoFocus,
        size,
        autoCapitalize,
        type,
        inputMode,
        focused,
        rows,
        maxRows,
        ref,
        children,
        error,
        helperText,
    } = props;

    let { variant, autoComplete } = props;

    variant = variant ? variant : 'outlined';
    autoComplete = autoComplete ? autoComplete : 'off';

    return (
        <TextField
            {...props}
            value={value}
            ref={ref}
            fullWidth
            label={label}
            onChange={onChange}
            onClick={onClick}
            required={required}
            disabled={disabled}
            variant={variant}
            color={color}
            style={style}
            autoFocus={autoFocus}
            size={size}
            autoCapitalize={autoCapitalize}
            type={type}
            autoComplete={autoComplete}
            inputMode={inputMode}
            focused={focused}
            rows={rows}
            maxRows={maxRows}
            children={children}
            error={error}
            helperText={helperText}
        />
    );
};

export default FitTextInput;