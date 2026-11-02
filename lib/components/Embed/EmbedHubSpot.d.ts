export interface EmbedHubSpotError {
    message: string;
    /** HubSpot error code or a local failure such as TIMEOUT or SCRIPT_LOAD_ERROR. */
    reason?: string;
    /** HTTP status when known; transient failures may not have a status. */
    status?: number;
}
export interface EmbedHubSpotProps {
    formId: string;
    portalId: string;
    /** The account region from HubSpot's embed code. Defaults to na1. */
    region?: string;
    /** Called once when the form renders successfully, including modern embeds. */
    onReady?: () => void;
    /** Reports load failures for the host to display; this component renders no error UI. */
    onError?: (error: EmbedHubSpotError) => void;
}
type HubSpotErrorHandler = (eventType: unknown, reason?: unknown) => void;
interface HubSpotFormInstance {
    on: (event: string, handler: HubSpotErrorHandler) => void;
    off?: (event: string, handler: HubSpotErrorHandler) => void;
}
interface HubSpotForms {
    create: (options: {
        portalId: string;
        formId: string;
        region: string;
        target: string;
        formInstanceId: string;
        onReady: () => void;
        onFormReady: () => void;
        onRenderError: HubSpotErrorHandler;
    }) => HubSpotFormInstance | void;
}
declare global {
    interface Window {
        hbspt?: {
            forms: HubSpotForms;
        };
    }
}
export declare const EmbedHubSpot: {
    ({ formId, portalId, region, onReady, onError }: EmbedHubSpotProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
