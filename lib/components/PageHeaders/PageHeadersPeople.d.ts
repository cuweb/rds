export interface PageHeadersPeopleProps {
    jobTitle?: string;
    degrees?: string;
    building?: string;
    room?: string;
    email?: string;
    phone?: string;
    phoneExt?: string;
}
export interface PageHeadersSocialProps {
    resume?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
}
export declare const PageHeadersPeople: {
    ({ jobTitle, ...restProps }: PageHeadersPeopleProps & PageHeadersSocialProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
