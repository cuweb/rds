interface FundingDetailsProps {
    title: string;
    raised: number;
    goal: number;
    endDate: string;
    imageUrl: string;
    imageAlt: string;
    categories?: string[];
}
export declare const FundingDetails: {
    ({ title, raised, goal, endDate, imageUrl, imageAlt, categories, }: FundingDetailsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
