export interface PaginationProps {
    hasBorder?: boolean;
    hasSpacing?: boolean;
    totalCount: number;
    siblingCount: number;
    pageSize: number;
    callback: (k: [number?, number?]) => void;
    onClickPage?: (page: number) => void;
}
export declare const Pagination: ({ hasBorder, hasSpacing, totalCount, siblingCount, pageSize, callback, onClickPage, }: PaginationProps) => import("react/jsx-runtime").JSX.Element | null;
