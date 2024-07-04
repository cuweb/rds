export interface LoginProps {
    isCenter?: boolean;
    useSocial?: boolean;
    errorTitle?: string;
    errorDesc?: string;
    onClickHandler?: () => void;
}
export declare const Login: ({ isCenter, useSocial, errorTitle, errorDesc, onClickHandler, }: LoginProps) => import("react/jsx-runtime").JSX.Element;
