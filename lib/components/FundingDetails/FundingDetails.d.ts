interface FundingDetailsProps {
    status: string;
    title: string;
    raised: number;
    goal: number;
    imageUrl: string;
    imageAlt: string;
}
export declare const FundingDetails: {
    ({ status, title, raised, goal, imageUrl, imageAlt }: FundingDetailsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
