import { socialServices } from './SocialServices';
type socialServicesKeys = keyof typeof socialServices;
export interface SocialIconsItemProps {
    socialService: socialServicesKeys;
    socialLink: string;
}
export declare const SocialIconsItem: ({ socialService, socialLink }: SocialIconsItemProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
