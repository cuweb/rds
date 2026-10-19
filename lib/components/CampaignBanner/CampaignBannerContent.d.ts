import { default as React } from '../../../node_modules/react';
export interface CampaignCategory {
    name: string;
    link: string;
}
export interface CampaignTag {
    name: string;
    link: string;
}
export interface CampaignBannerContentProps {
    children?: React.ReactNode;
    title: string;
    tags?: CampaignTag[];
    categories?: CampaignCategory[];
}
export declare const CampaignBannerContent: {
    ({ title, tags, categories, children }: CampaignBannerContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
