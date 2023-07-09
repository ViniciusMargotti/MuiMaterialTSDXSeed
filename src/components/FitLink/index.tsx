import { Link } from '@mui/material';
import React from 'react';
import { IMarginProps, IPaddingProps, IDefaultMuiProps } from '../../interfaces';

interface IFitLinkProps extends IMarginProps, IPaddingProps, IDefaultMuiProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?:
        | 'body1'
        | 'body2'
        | 'button'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'inherit'
        | 'subtitle1'
        | 'subtitle2';
    underline?: 'none' | 'hover' | 'always';
    color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
}

const FitLink = (props: IFitLinkProps) => {
    const { children, onClick, href, variant, color } = props;

    let { underline } = props;

    underline = underline || 'hover';

    return (
        <Link
            {...props}
            component="button"
            children={children}
            onClick={onClick}
            href={href}
            variant={variant}
            underline={underline}
            color={color}
        />
    );
};

export default FitLink;