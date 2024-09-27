import ReactSlider from 'react-slick'
import { ImageGrid } from '../ImageGrid/ImageGrid'

export interface SliderProp {
  slidesToShow: number
  slidesToScroll: number
  dots?: boolean
  infinite?: boolean
  speed?: number
  customClass?: string
  images: string[]
}

export const Slider = ({ dots, infinite, speed, slidesToShow, slidesToScroll, customClass, images }: SliderProp) => {
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
      {images.map((image, index) => (
        <ImageGrid.Image key={index} imageUrl={image} />
      ))}
    </ReactSlider>
  )
}
