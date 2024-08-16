import { default as React } from '../../../node_modules/react';
import { maxWidthClasses, flexRowClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
type flexRowKeys = keyof typeof flexRowClasses;
export interface TextImageProps {
    children?: React.ReactNode;
    maxWidth?: maxWidthKeys;
    flexRow?: flexRowKeys;
    flipX?: boolean;
    flipYsm?: boolean;
}
export declare const TextImageWrapper: {
    ({ children, maxWidth, flexRow, flipX, flipYsm }: TextImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const TextImage: {
    ({ children, maxWidth, flexRow, flipX, flipYsm }: TextImageProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ children, title, headerType, isCenter, imageUrl, contentWidth, imageZoom, focalPointX, focalPointY, hasMobileImage, }: import('./TextImageContent').TextImageContentProps & import('./TextImageContent').TextImageMediaProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export {};
