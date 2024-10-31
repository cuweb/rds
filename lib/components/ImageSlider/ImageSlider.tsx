import { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ImageSliderItem } from './ImageSliderItem'
import SwiperSlider from './script'

export interface ImageSliderProp {
  children: React.ReactNode
  loop?: boolean
  speed?: number
  slidesPerViewMobile?: number
  slidesPerViewTablet?: number
  slidesPerViewDesktop: number
  customClass?: string
}

export const ImageSliderWrapper = ({
  children,
  loop = false,
  speed = 500,
  slidesPerViewMobile = 1,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,
  customClass,
}: ImageSliderProp) => {
  useEffect(() => {
    SwiperSlider()
  }, [])

  return (
    <div
      className={`swiper swiper--slider ${customClass ? customClass : ''}`}
      data-swiper-class={`${customClass ? customClass : 'swiper'}`}
      data-swiper-loop={loop}
      data-swiper-speed={speed}
      data-swiper-perview-mobile={slidesPerViewMobile}
      data-swiper-perview-tablet={slidesPerViewTablet}
      data-swiper-perview-desktop={slidesPerViewDesktop}
    >
      <div className="swiper-wrapper">{children}</div>
      <div className="swiper__footer">
        <button type="button" className="swiper__button swiper__button--prev" aria-label="Previous slide">
          <ChevronLeftIcon className="w-8 h-8 [&>path]:stroke-[2]" aria-hidden="true" />
        </button>
        <button type="button" className="swiper__button swiper__button--next" aria-label="Next slide">
          <ChevronRightIcon className="w-8 h-8 [&>path]:stroke-[2]" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export const ImageSlider = Object.assign(ImageSliderWrapper, {
  Item: ImageSliderItem,
})

ImageSliderWrapper.displayName = 'ImageSlider'
