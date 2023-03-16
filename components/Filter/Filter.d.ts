export interface FilterProps {
    sortOptions?: {
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
    callback: (k: string[]) => void;
}
export declare const Filter: ({ sortOptions, filters, callback }: FilterProps) => JSX.Element;
//# sourceMappingURL=Filter.d.ts.map