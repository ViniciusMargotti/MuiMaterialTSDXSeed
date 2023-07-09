import React from 'react';
import { ListSubheader } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';

interface IFitListSubheader extends IDefaultMuiProps {
    component: React.ElementType;
    children: React.ReactNode;
    color?: 'default' | 'primary' | 'inherit';
    disableGutters?: boolean;
    inset?: boolean;
    disableSticky?: boolean;
}

const FitListSubheader = (props: IFitListSubheader) => {
    const { component, children, color, disableGutters, inset, disableSticky } = props;
    return (
        <ListSubheader
            component={component}
            children={children}
            color={color}
            disableGutters={disableGutters}
            inset={inset}
            disableSticky={disableSticky}
        />
    );
};

export default FitListSubheader;