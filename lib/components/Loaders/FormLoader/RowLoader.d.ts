import { default as React } from '../../../../node_modules/react';
export interface RowLoaderProps {
    cols: 1 | 2 | 3 | 4 | '1/3' | '2/3';
    fields: number;
}
export declare const RowLoader: React.FC<RowLoaderProps>;
