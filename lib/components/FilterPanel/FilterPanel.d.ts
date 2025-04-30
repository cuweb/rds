export interface IFilterPanelWrapperProp {
    children?: React.ReactNode;
}
export declare const FilterPanelWrapper: ({ children }: IFilterPanelWrapperProp) => import("react/jsx-runtime").JSX.Element;
export declare const FilterPanel: (({ children }: IFilterPanelWrapperProp) => import("react/jsx-runtime").JSX.Element) & {
    Top: {
        ({ sortOptions, filterOptions }: import('./FilterPanelTop').IFilterTopProp): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Bottom: {
        (): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
