export interface PaginationProps {
    hasBorder?: boolean;
    hasSpacing?: boolean;
    totalCount: number;
    siblingCount: number;
    pageSize: number;
    callback: (k: [number, number]) => void;
}
export declare const Pagination: ({ hasBorder, hasSpacing, totalCount, siblingCount, pageSize, callback, }: PaginationProps) => JSX.Element | null;
//# sourceMappingURL=Pagination.d.ts.map