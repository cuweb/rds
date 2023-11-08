export interface TextImagePeopleProps {
    designation?: string;
    name: string;
    jobTitle?: string;
    pronoun?: string;
    imageUrl?: string;
    imageAlt?: string;
    degrees?: string;
    building?: string;
    room?: string;
    email?: string;
    phone?: string;
    phoneExt?: string;
}
export interface TextImageSocialProps {
    resume?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
}
export declare const TextImagePeople: {
    ({ imageUrl, imageAlt, designation, name, jobTitle, pronoun, ...restProps }: TextImagePeopleProps & TextImageSocialProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
//# sourceMappingURL=TextImagePeople.d.ts.map