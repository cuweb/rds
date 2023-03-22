const styles = {
  wrapper: `cu-panel not-contained not-prose mx-auto overflow-hidden rounded-lg bg-white w-full`,
  title: `px-6 py-4 text-base md:text-xl font-semibold border-b rounded-t-lg bg-gray-50 text-cu-black-800`,
  grid: `grid overflow-hidden`,
  border: `border border-cu-black-100 `,
  shadow: `shadow-lg`,
}
export default styles

export const gridStyles = {
  oneCol: `md:grid-cols-1`,
  twoCol: `md:grid-cols-2 md:odd:[&>*]:border-r`,
}
