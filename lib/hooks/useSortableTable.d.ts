interface DataProps {
    [k: string]: string | number | React.ReactElement;
}
export declare const useSortableTable: (data: DataProps[]) => readonly [DataProps[], (orderBy: string, asc: boolean) => void];
export {};
