const styles = {
  base: `cu-container py-10 px-8 -mx-8 md:py-14`,
  white: `cu-container-white [&+.cu-container-white]:pt-0 bg-white`,
  grey: `cu-container-grey bg-cu-black-50 [&+.cu-container-grey]:pt-0`,
  width5xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  width7xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  widthFull: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  autoMargin: `[&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  prose: `prose prose-rds prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
}
export default styles
