import { useEffect } from 'react'
import { SliderImage } from './SliderImage'
import SwiperSlider from './script'

export interface SliderProp {
  children: React.ReactNode
  pagination?: boolean
  loop?: boolean
  speed?: number
  slidesPerView: number
  customClass?: string
}

export const SliderWrapper = ({
  children,
  pagination = true,
  loop = false,
  speed = 500,
  slidesPerView,
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
      data-swiper-perview={slidesPerView}
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
