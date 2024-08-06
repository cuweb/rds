import { gridColumnClasses, gridGapClasses, maxWidthClasses } from '../../utils/propClasses';

type maxWidthKeys = keyof typeof maxWidthClasses;
type gridColumnKeys = keyof typeof gridColumnClasses;
type gridGapKeys = keyof typeof gridGapClasses;
export interface ImageGridProps {
    children: React.ReactNode;
    maxWidth?: maxWidthKeys;
    cols?: gridColumnKeys;
    gridGap?: gridGapKeys;
}
export declare const ImageGridWrapper: ({ children, maxWidth, gridGap, cols }: ImageGridProps) => import("react/jsx-runtime").JSX.Element;
export declare const ImageGrid: (({ children, maxWidth, gridGap, cols }: ImageGridProps) => import("react/jsx-runtime").JSX.Element) & {
    Item: ({ children, colSpan, rowSpan, title, content, link }: import('./ImageGridItem').ImageGridItemProps) => import("react/jsx-runtime").JSX.Element;
};
export {};
