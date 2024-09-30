import { useEffect } from 'react'
import { SliderImage } from './SliderImage'
import SwiperSlider from './script'

export interface SliderProp {
  children: React.ReactNode
  pagination?: boolean
  loop?: boolean
  speed?: number
  slidesPerViewMobile?: number
  slidesPerViewTablet?: number
  slidesPerViewDesktop: number
  customClass?: string
}

export const SliderWrapper = ({
  children,
  pagination = true,
  loop = false,
  speed = 500,
  slidesPerViewMobile = 1,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,
  customClass,
}: SliderProp) => {
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
      data-pagination={pagination}
    >
      <div className="swiper-wrapper">{children}</div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  )
}

export const Slider = Object.assign(SliderWrapper, {
  Image: SliderImage,
})

SliderWrapper.displayName = 'Slider'
