import React from 'react';
import { Typography } from '@mui/material';
import { IMarginProps, IPaddingProps, IDefaultMuiProps } from '../../interfaces';

interface IFitText extends IMarginProps, IPaddingProps, IDefaultMuiProps {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
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
    paragraph?: boolean;
    noWrap?: boolean;
    gutterBottom?: boolean;
    children?: React.ReactNode;
}

const FitText = (props: IFitText) => {
    const { variant, paragraph, noWrap, gutterBottom, children } = props;
    return (
        <Typography
            {...props}
            children={children}
            variant={variant}
            paragraph={paragraph}
            noWrap={noWrap}
            gutterBottom={gutterBottom}
        />
    );
};

export default FitText;