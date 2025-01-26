export declare const NavDataSingle: ({
    href: string;
    title: string;
    submenu?: undefined;
} | {
    href: string;
    title: string;
    submenu: ({
        href: string;
        title: string;
        submenu: {
            href: string;
            title: string;
        }[];
    } | {
        href: string;
        title: string;
        submenu?: undefined;
    })[];
})[];
export declare const NavButtonsData: {
    href: string;
    title: string;
    buttonColor: string;
}[];
export declare const NavAsideEventCal: {
    href: string;
    title: string;
}[];
export declare const NavAsideLoggedInOptionsHref: {
    href: string;
    title: string;
}[];
export declare const NavAsideLoggedInOptionsOnClick: ({
    href: string;
    title: string;
    onClickHandler?: undefined;
} | {
    onClickHandler: () => void;
    title: string;
    href?: undefined;
})[];
