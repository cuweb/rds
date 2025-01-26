export interface SocialIconsProps {
    children?: React.ReactNode;
    prefix?: string;
}
export declare const SocialIconsWrapper: {
    ({ children, prefix }: SocialIconsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const SocialIcons: {
    ({ children, prefix }: SocialIconsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Item: ({ socialService, socialLink }: import('./SocialIconsItem').SocialIconsItemProps) => import("react/jsx-runtime").JSX.Element | null;
};
