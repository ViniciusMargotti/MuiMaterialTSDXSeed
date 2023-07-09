import React from 'react';
import FitStack, { IFitStackProps } from '../FitStack';

interface IFitHStackProps extends IFitStackProps {
    reverse?: boolean;
}

const FitHStack = (props: IFitHStackProps) => {
    const { reverse } = props;
    const direction = reverse ? 'row-reverse' : 'row';
    return <FitStack {...props} direction={direction} />;
};

export default FitHStack;