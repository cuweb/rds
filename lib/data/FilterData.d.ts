export declare const FilterData: {
    title: string;
    classname: string;
    sortOptions: {
        name: string;
        href: string;
        current: boolean;
    }[];
    filters: {
        id: string;
        name: string;
        options: {
            value: string;
            label: string;
            checked: boolean;
        }[];
    }[];
};
export declare const FilterPanelData: {
    sortOptions: ({
        label: string;
        value: string;
        selected: boolean;
    } | {
        label: string;
        value: string;
        selected?: undefined;
    })[];
    filters: {
        id: string;
        name: string;
        options: {
            value: string;
            label: string;
            checked: boolean;
        }[];
    }[];
};
