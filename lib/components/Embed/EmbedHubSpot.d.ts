export interface EmbedHubSpotProps {
    formId: string;
    portalId: string;
}
interface HubSpotForms {
    create: (options: {
        portalId: string;
        formId: string;
        target: string;
    }) => void;
}
declare global {
    interface Window {
        hbspt?: {
            forms: HubSpotForms;
        };
    }
}
export declare const EmbedHubSpot: {
    ({ formId, portalId }: EmbedHubSpotProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
