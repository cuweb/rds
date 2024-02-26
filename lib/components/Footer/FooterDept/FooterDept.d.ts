interface FooterButtons {
    id: number;
    title: string;
    url: string;
}
interface FooterDeptProps {
    deptName?: string;
    buildingName?: string;
    phone?: string;
    email?: string;
    officeNumber?: string;
    footerButtons?: FooterButtons[];
}
export declare const FooterDept: ({ deptName, buildingName, officeNumber, phone, email, footerButtons }: FooterDeptProps) => import("react/jsx-runtime").JSX.Element;
export {};
