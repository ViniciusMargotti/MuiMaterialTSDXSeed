import React from 'react';
import { Container } from '@mui/material';
import { IDefaultMuiProps } from '../../interfaces';

interface IFitContainerProps {
    maxWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
    onClick?: () => void;
    style?: React.CSSProperties;
    autoFocus?: boolean;
    children?: React.ReactNode;
    color?: string;
}

const FitContainer = (props: IFitContainerProps & IDefaultMuiProps) => {
    const { maxWidth, onClick, style, autoFocus, children, color, sx } = props;

    return (
        <Container
            {...props}
            children={children}
            maxWidth={maxWidth}
            onClick={onClick}
            style={style}
            autoFocus={autoFocus}
            color={color}
            sx={sx}
        />
    );
};

export default FitContainer;