export interface PageHeaderPeopleProps {
    jobTitle?: string;
    degrees?: string;
    building?: string;
    room?: string;
    email?: string;
    phone?: string;
    phoneExt?: string;
}
export interface PageHeaderSocialProps {
    resume?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
}
export declare const PageHeaderPeople: {
    ({ jobTitle, ...restProps }: PageHeaderPeopleProps & PageHeaderSocialProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
