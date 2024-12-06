import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { Slide } from './Slide'
import { SliderImage } from './SliderImage.tsx'
import SliderScript from './script.ts'

export interface SliderProp {
  children: React.ReactNode
  slidesPerViewDesktop: number
  slidesPerViewTablet?: number
  slidesPerViewMobile?: number
}

export const SliderWrapper = ({
  children,
  slidesPerViewDesktop,
  slidesPerViewTablet,
  slidesPerViewMobile,
}: SliderProp) => {
  useEffect(() => {
    SliderScript()
  })

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
        <button className="slider__arrow slider__arrow--prev bg-cu-black-800 text-white hover:bg-cu-red text-2xl relative flex items-center justify-center rounded-full p-1 h-12 w-12 z-50">
          <span className="sr-only">Go to Previous Slide</span>
          <ChevronLeftIcon className="w-8 h-8 [&>path]:stroke-[2]" aria-hidden="true" />
        </button>

        <button className="slider__arrow slider__arrow--next bg-cu-black-800 text-white hover:bg-cu-red text-2xl relative flex items-center justify-center rounded-full p-1 h-12 w-12 z-50">
          <span className="sr-only">Go to Next Slide</span>
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
