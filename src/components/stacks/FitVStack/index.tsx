import React from 'react';
import FitStack, { IFitStackProps } from '../FitStack';

interface IFitVStackProps extends IFitStackProps {
    reverse?: boolean;
}

const FitVStack = (props: IFitVStackProps) => {
    const { reverse } = props;
    const direction = reverse ? 'column-reverse' : 'column';
    return <FitStack {...props} direction={direction} />;
};

export default FitVStack;