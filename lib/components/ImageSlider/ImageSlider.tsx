import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Slide } from './Slide'
import { Image } from './Image'
import SliderScript from './script.ts'

export interface ImageSliderProp {
  children: React.ReactNode
  slidesPerViewDesktop: number
  slidesPerViewTablet?: number
  slidesPerViewMobile?: number
}

export const ImageSliderWrapper = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewMobile,
}: ImageSliderProp) => {
  useEffect(() => {
    SliderScript()
  })

  const arrowButtons = `bg-cu-black-50 text-cu-black-800 hover:bg-cu-red hover:text-white hover:bg-cu-red relative flex items-center justify-center rounded-md h-8 w-8 z-50`
  const arrowIcons = `w-5 h-5 [&>path]:stroke-[2]`

  return (
    <div
      className="slider overflow-hidden"
      data-slides-desktop={slidesPerViewDesktop}
      data-slides-tablet={slidesPerViewTablet}
      data-slides-mobile={slidesPerViewMobile}
    >
      {/* Slider Slides */}
      <div className="slider__wrap flex align-items-center">{children}</div>

      {/* Slider Arrow */}
      <div className="flex align-items-center gap-3 justify-center mt-4">
        <button className={`slider__arrow slider__arrow--prev ${arrowButtons}`}>
          <span className="sr-only">Go to Previous Slide</span>
          <ChevronLeftIcon className={arrowIcons} aria-hidden="true" />
        </button>

        <button className={`slider__arrow slider__arrow--next ${arrowButtons}`}>
          <span className="sr-only">Go to Next Slide</span>
          <ChevronRightIcon className={arrowIcons} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export const ImageSlider = Object.assign(ImageSliderWrapper, {
  Slide: Slide,
  Image: Image,
})

ImageSliderWrapper.displayName = 'ImageSlider'
