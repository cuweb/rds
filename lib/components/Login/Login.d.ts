export interface LoginProps {
    isCenter?: boolean;
    useSocial?: boolean;
    errorTitle?: string;
    errorDesc?: string;
    onClickHandler?: {
        default: () => void;
        google: () => void;
        linkedIn: () => void;
        twitter: () => void;
    };
}
export declare const Login: ({ isCenter, useSocial, errorTitle, errorDesc, onClickHandler, }: LoginProps) => import("react/jsx-runtime").JSX.Element;
