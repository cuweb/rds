/// <reference types="react" />
interface PrimaryLinks {
    id: number;
    title: string;
    url: string;
}
interface SecondaryLinks {
    id: number;
    title: string;
    url: string;
}
interface SocialLinks {
    id: number;
    title: string;
    url: string;
    hover: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
interface FooterButtons {
    id: number;
    title: string;
    url: string;
}
interface FooterSimpleProps {
    deptName?: string;
    deptUrl?: string;
    buildingName?: string;
    officeNumber?: string;
    primaryTitle?: string;
    primaryLinks?: PrimaryLinks[];
    secondaryTitle?: string;
    secondaryLinks?: SecondaryLinks[];
    socialLinks?: SocialLinks[];
    footerButtons?: FooterButtons[];
}
export declare const FooterSimple: ({ deptName, deptUrl, buildingName, officeNumber, primaryTitle, primaryLinks, secondaryTitle, secondaryLinks, socialLinks, footerButtons, }: FooterSimpleProps) => import("react/jsx-runtime").JSX.Element;
export {};
