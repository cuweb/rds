import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface LoginProps {
    maxWidth?: maxWidthKeys;
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
export declare const Login: ({ maxWidth, useSocial, errorTitle, errorDesc, onClickHandler, }: LoginProps) => import("react/jsx-runtime").JSX.Element;
export {};
