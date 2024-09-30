import ReactSlider from 'react-slick'
import { SliderImage } from './SliderImage'

export interface SliderProp {
  children: React.ReactNode
  slidesToShow: number
  slidesToScroll: number
  dots?: boolean
  infinite?: boolean
  speed?: number
  customClass?: string
}

export const SliderWrapper = ({
  children,
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
  customClass,
}: SliderProp) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: false,
  }

  return (
    <ReactSlider {...settings} className={customClass}>
      {children}
    </ReactSlider>
  )
}

export const Slider = Object.assign(SliderWrapper, {
  Image: SliderImage,
})

SliderWrapper.displayName = 'Slider'
