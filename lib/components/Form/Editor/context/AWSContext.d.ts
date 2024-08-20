import { FC, ReactNode } from '../../../../../node_modules/react';
export interface AWSImageContextType {
    images: string[];
    addImage: (url: string) => void;
}
export declare const AWSImageContext: import('../../../../../node_modules/react').Context<AWSImageContextType | undefined>;
declare const AWSImageProvider: FC<{
    children: ReactNode;
}>;
export { AWSImageProvider };
