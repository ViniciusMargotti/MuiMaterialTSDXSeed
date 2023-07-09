import { SxProps } from '@mui/system/styleFunctionSx';

export interface IMarginProps {
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginX?: string;
    marginY?: string;
    m?: number;
    ml?: number;
    mr?: number;
    mt?: number;
    mb?: number;
    mx?: number;
    my?: number;
}

export interface IPaddingProps {
    padding?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingX?: string;
    paddingY?: string;
    p?: number;
    pl?: number;
    pr?: number;
    pt?: number;
    pb?: number;
    px?: number;
    py?: number;
}

export interface IDefaultMuiProps {
    sx?: SxProps;
}