import { default as React } from '../../../node_modules/react';
export interface TestimonialProps {
    children: React.ReactNode;
    name: string;
    imageUrl: string;
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
    quoteType?: 'border' | 'quote';
}
export declare const Testimonial: ({ children, name, imageUrl, imageZoom, focalPointX, focalPointY, quoteType, }: TestimonialProps) => import("react/jsx-runtime").JSX.Element;
