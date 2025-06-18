import { useEffect } from 'react'
import { Icon } from '../Icon/Icon'
import { ImageSliderItem } from './ImageSliderItem'
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
  }, [])

  const arrowButtons = `bg-cu-black-50 text-cu-black-800 hover:bg-cu-red hover:text-white hover:bg-cu-red relative flex items-center justify-center rounded-md h-8 w-8 z-50 disabled:opacity-50 disabled:cursor-not-allowed`
  const arrowIcons = `w-5 h-5 [&>path]:stroke-[2]`

  return (
    <div
      className="cu-slider cu-component-updated overflow-hidden -mr-4"
      data-slides-desktop={slidesPerViewDesktop}
      data-slides-tablet={slidesPerViewTablet}
      data-slides-mobile={slidesPerViewMobile}
    >
      {/* Slider Slides */}
      <div className="cu-slider--wrap flex align-items-center">{children}</div>

      {/* Slider Arrow */}
      <div className="flex align-items-center gap-3 justify-center mt-4">
        <button className={`cu-slider--arrow cu-slider--arrow-prev ${arrowButtons}`}>
          <span className="sr-only">Go to Previous Slide</span>
          <Icon name="chevron-left" className={arrowIcons} />
        </button>

        <button className={`cu-slider--arrow cu-slider--arrow-next ${arrowButtons}`}>
          <span className="sr-only">Go to Next Slide</span>
          <Icon name="chevron-right" className={arrowIcons} />
        </button>
      </div>
    </div>
  )
}

export const ImageSlider = Object.assign(ImageSliderWrapper, {
  Item: ImageSliderItem,
})

ImageSliderWrapper.displayName = 'ImageSlider'
