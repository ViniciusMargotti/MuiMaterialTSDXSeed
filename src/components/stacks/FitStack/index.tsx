import React from 'react';
import { Stack } from '@mui/material';
import { IPaddingProps, IMarginProps, IDefaultMuiProps } from '../../../interfaces';

interface IStackProps {
    style?: React.CSSProperties;
    onClick?: () => void;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    autoFocus?: boolean;
    children?: React.ReactNode;
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    display?: 'flex' | 'inline-flex';
    spacing?: number;
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

export interface IFitStackProps extends IStackProps, IDefaultMuiProps, IMarginProps, IPaddingProps {}

const FitStack = (props: IFitStackProps) => {
    const {
        style,
        onClick,
        direction,
        alignContent,
        autoFocus,
        children,
        alignItems,
        justifyContent,
        display,
        spacing,
        flexGrow,
        flex,
        flexWrap,
        flexShrink,
    } = props;

    return (
        <Stack
            {...props}
            children={children}
            style={style}
            onClick={onClick}
            direction={direction}
            alignContent={alignContent}
            autoFocus={autoFocus}
            alignItems={alignItems}
            justifyContent={justifyContent}
            display={display}
            spacing={spacing}
            flex={flex}
            flexGrow={flexGrow}
            flexShrink={flexShrink}
            flexWrap={flexWrap}
        />
    );
};

export default FitStack;