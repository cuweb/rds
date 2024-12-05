import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Slide } from './Slide'
import { SliderImage } from './SliderImage.tsx'
import SliderScript from './script.ts'

export interface SliderProp {
  children: React.ReactNode
  slidesPerViewMobile?: number
  slidesPerViewTablet?: number
  slidesPerViewDesktop: number
}

export const SliderWrapper = ({
  children,
  slidesPerViewMobile,
  slidesPerViewTablet,
  slidesPerViewDesktop,
}: SliderProp) => {
  useEffect(() => {
    SliderScript()
  })

  return (
    <div
      className="slider overflow-hidden"
      data-slides-mobile={slidesPerViewMobile}
      data-slides-tablet={slidesPerViewTablet}
      data-slides-desktop={slidesPerViewDesktop}
    >
      {/* Slider Slides */}
      <div className="slider__wrap flex align-items-center">{children}</div>

      {/* Slider Arrow */}
      <div className="flex align-items-center gap-3 justify-center mt-4">
        <button className="slider__arrow slider__arrow--prev bg-cu-black-800 text-white hover:bg-cu-red text-2xl relative flex items-center justify-center rounded-full p-1 h-12 w-12 z-50">
          <span className="sr-only">Previous Slide</span>
          <ChevronLeftIcon className="w-8 h-8 [&>path]:stroke-[2]" aria-hidden="true" />
        </button>

        <button className="slider__arrow slider__arrow--next bg-cu-black-800 text-white hover:bg-cu-red text-2xl relative flex items-center justify-center rounded-full p-1 h-12 w-12 z-50">
          <span className="sr-only">Next Slide</span>
          <ChevronRightIcon className="w-8 h-8 [&>path]:stroke-[2]" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export const Slider = Object.assign(SliderWrapper, {
  Slide: Slide,
  Image: SliderImage,
})

SliderWrapper.displayName = 'Slider'
