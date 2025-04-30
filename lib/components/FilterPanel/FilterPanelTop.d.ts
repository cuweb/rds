import { default as React } from '../../../node_modules/react';
export interface SortOptions {
    label: string;
    value: string;
    selected?: boolean;
}
export interface FilterOption {
    value: string;
    label: string;
    checked: boolean;
}
export interface FilterOptions {
    id: string;
    name: string;
    options: FilterOption[];
}
export interface IFilterTopProp {
    children?: React.ReactNode;
    sortOptions?: SortOptions[];
    filterOptions?: FilterOptions[];
}
export declare const DropDownSVG: () => import("react/jsx-runtime").JSX.Element;
export declare const FilterPanelTop: {
    ({ sortOptions, filterOptions }: IFilterTopProp): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
