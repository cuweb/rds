export default interface ImenuItem {
    href?: string;
    title: string;
    buttonColor?: string;
    onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>;
    submenu?: ImenuItem[];
}
