import React from 'react';
import { Backdrop } from '@mui/material';
import FitCircularProgress from '../FitCircularProgress';

interface IFitBackdropProps {
    children?: React.ReactNode;
    open: boolean;
}

const FitBackdrop = (props: IFitBackdropProps) => {
    const { children, open } = props;
    return <Backdrop open={open}>{children ? children : <FitCircularProgress color='primary' />}</Backdrop>;
};

export default FitBackdrop;