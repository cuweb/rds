import { default as React } from '../../../node_modules/react';
export interface TestimonialProps {
    children: React.ReactNode;
    imageUrl: string;
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
    reverse?: boolean;
}
export declare const Testimonial: ({ children, imageUrl, imageZoom, focalPointX, focalPointY, reverse, }: TestimonialProps) => import("react/jsx-runtime").JSX.Element;
