import { ReactNode } from '../../../node_modules/react';
export declare const CampaignBannerWrapper: {
    ({ children }: {
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const CampaignBanner: {
    ({ children }: {
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Content: {
        ({ title, tags, categories, children }: import('./CampaignBannerContent').CampaignBannerContentProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Image: {
        ({ children }: import('./CampaignBannerImage').CampaignBannerImageProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Stats: {
        ({ raised, goal, endDate }: import('./CampaignBannerStats').CampaignBannerStatsProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
