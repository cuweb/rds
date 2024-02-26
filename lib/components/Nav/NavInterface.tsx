export default interface ImenuItem {
  href?: string
  title: string
  onClickHandler?: React.MouseEventHandler<HTMLAnchorElement>
  submenu?: ImenuItem[]
}
