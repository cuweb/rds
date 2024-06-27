export interface PaginationProps {
    hasBorder?: boolean;
    hasSpacing?: boolean;
    totalCount: number;
    siblingCount: number;
    pageSize: number;
    callback: (k: [number?, number?]) => void;
    callbackPage: (page: number) => void;
}
export declare const Pagination: ({ hasBorder, hasSpacing, totalCount, siblingCount, pageSize, callback, callbackPage, }: PaginationProps) => import("react/jsx-runtime").JSX.Element | null;
