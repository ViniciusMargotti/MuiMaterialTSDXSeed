import React from 'react';
import { List } from '@mui/material';
import { IDefaultMuiProps } from '../../../interfaces';

interface IFitList extends IDefaultMuiProps {
    children: React.ReactNode;
    component: React.ElementType;
    labelledby?: string;
    subheader?: React.ReactNode;
    dense?: boolean;
    onClick?: () => void;
}

const FitList = (props: IFitList) => {
    const { children, component, labelledby, subheader, dense, onClick } = props;

    return (
        <List
            {...props}
            children={children}
            component={component}
            aria-labelledby={labelledby}
            subheader={subheader}
            dense={dense}
            onClick={onClick}
        />
    );
};

export default FitList;