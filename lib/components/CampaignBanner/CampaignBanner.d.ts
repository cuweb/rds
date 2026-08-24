export interface CampaignCategory {
    name: string;
    link?: string;
}
interface CampaignBannerProps {
    title: string;
    raised: number;
    goal: number;
    endDate: string;
    categories?: CampaignCategory[];
}
export declare const CampaignBanner: {
    ({ title, raised, goal, endDate, categories }: CampaignBannerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
