import { default as React } from '../../../node_modules/react';
export interface WideWaveProps {
    children?: React.ReactNode;
    as?: 'section' | 'div';
    wave?: 'red' | 'black';
    hasRaven?: boolean;
}
export declare const WideWave: ({ children, as, wave, hasRaven }: WideWaveProps) => import("react/jsx-runtime").JSX.Element;
