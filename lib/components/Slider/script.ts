import 'slick-carousel'

export const DoSlide = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slider = document.querySelector('.slider') as any

  if (slider) {
    slider.slick()
  }
}
