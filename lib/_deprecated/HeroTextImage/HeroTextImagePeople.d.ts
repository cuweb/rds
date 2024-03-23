import React from '../../../node_modules/react';
export interface HeroTextImagePeopleProps {
    children?: React.ReactNode;
    designation?: string;
    title: string;
    jobTitle?: string;
    pronoun?: string;
    degrees?: string;
    building?: string;
    room?: string;
    email?: string;
    phone?: string;
    phoneExt?: string;
}
export declare const contactInfo: string[];
export declare const HeroTextImagePeople: {
    ({ children, designation, title, jobTitle, pronoun, ...contactInfo }: HeroTextImagePeopleProps): import('../../../node_modules/react/jsx-runtime').JSX.Element;
    displayName: string;
};
