import React from 'react';
import { Avatar } from '@mui/material';
import { IDefaultMuiProps } from '../../interfaces';

interface IFitAvatar extends IDefaultMuiProps {
    children?: React.ReactNode;
    onClick?: () => void;
    style?: React.CSSProperties;
    autoFocus?: boolean;
    variant?: 'circular' | 'rounded' | 'square' | undefined;
    alt?: string;
    src?: string;
    size?: 'small' | 'medium' | 'large' | undefined;
}

const FitAvatar = (props: IFitAvatar) => {
    const { children, onClick, style, autoFocus, variant, alt, src, size } = props;

    const sizePixel = size === 'small' ? 32 : size === 'medium' ? 40 : size === 'large' ? 48 : 40;

    let { sx } = props;

    sx = {
        width: sizePixel,
        height: sizePixel,
        ...sx,
    };

    return (
        <Avatar
            {...props}
            sx={sx}
            children={children}
            onClick={onClick}
            style={style}
            autoFocus={autoFocus}
            variant={variant}
            alt={alt}
            src={src}
        />
    );
};

export default FitAvatar;