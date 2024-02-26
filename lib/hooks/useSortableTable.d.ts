/// <reference types="react" />
interface DataProps {
    [k: string]: string | number | JSX.Element;
}
export declare const useSortableTable: (data: DataProps[]) => readonly [DataProps[], (orderBy: string, asc: boolean) => void];
export {};
