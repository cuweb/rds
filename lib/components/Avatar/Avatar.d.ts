import { default as React } from '../../../node_modules/react';

export type ImageType = {
    src: string | undefined;
    alt: string | undefined;
    width?: string;
    height?: string;
    className?: string;
};
export type UserInfoType = {
    firstName: string;
    lastName: string;
    image?: ImageType;
    info?: React.ReactNode;
};
export interface AvatarProps {
    size?: keyof typeof avatarSizes;
    isCircle?: boolean;
    user: UserInfoType;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
declare const avatarSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '4xl': string;
};
export declare const Avatar: ({ size, isCircle, user, onClick }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export {};
