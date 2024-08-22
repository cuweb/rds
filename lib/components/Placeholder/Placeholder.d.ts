import { maxWidthClasses } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof maxWidthClasses;
export interface PlaceholderProps {
    name?: string;
    maxWidth?: maxWidthKeys;
}
export declare const Placeholder: ({ name, maxWidth }: PlaceholderProps) => import("react/jsx-runtime").JSX.Element;
export {};
