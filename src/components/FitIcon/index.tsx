import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IFitIcon {
    icon: any;
}

const FitIcon = (props: IFitIcon) => {
    const { icon } = props;
    return <FontAwesomeIcon icon={icon} />;
};

export default FitIcon;