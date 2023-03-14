const styles = {
  wrapper: `cu-panel not-prose overflow-hidden rounded-lg bg-white`,
  title: `px-6 py-4 text-base md:text-xl font-semibold border-b rounded-t-lg bg-gray-50 text-cu-black-800`,
  grid: `grid overflow-hidden [&>*]:border-cu-black-100  [&>*]:border-b last:[&>*]:-mb-px`,
  border: `border border-cu-black-100 `,
  shadow: `shadow-lg`,
}
export default styles

export const gridStyles = {
  oneCol: `md:grid-cols-1`,
  twoCol: `md:grid-cols-2 md:odd:[&>*]:border-r`,
}
