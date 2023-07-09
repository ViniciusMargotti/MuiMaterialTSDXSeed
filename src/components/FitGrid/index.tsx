import React from 'react';
import { Grid } from '@mui/material';
import { IMarginProps, IPaddingProps, IDefaultMuiProps } from '../../interfaces';

interface IFitGridProps extends IMarginProps, IPaddingProps, IDefaultMuiProps {
    children?: React.ReactNode;
    columns?: number;
    columnSpacing?: number;
    rowSpacing?: number;
    container?: boolean;
    item?: boolean;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    xs?: boolean | number;
    sm?: boolean | number;
    md?: boolean | number;
    lg?: boolean | number;
    xl?: boolean | number;
    spacing?: number;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const FitGrid = (props: IFitGridProps) => {
    const {
        children,
        columns,
        columnSpacing,
        rowSpacing,
        container,
        item,
        direction,
        xs,
        sm,
        md,
        lg,
        xl,
        spacing,
        wrap,
    } = props;

    return (
        <Grid
            {...props}
            children={children}
            container={container}
            item={item}
            direction={direction}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            spacing={spacing}
            wrap={wrap}
            columns={columns}
            columnSpacing={columnSpacing}
            rowSpacing={rowSpacing}
        />
    );
};

export default FitGrid;