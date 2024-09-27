import Slider from 'react-slick'
import { ImageGrid } from '../ImageGrid/ImageGrid'

export interface ImageSliderProp {
  slidesToShow: number
  slidesToScroll: number
  dots?: boolean
  infinite?: boolean
  speed?: number
  customClass?: string
}

export const ImageSlider = ({ dots, infinite, speed, slidesToShow, slidesToScroll, customClass }: ImageSliderProp) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: false,
  }

  return (
    <Slider {...settings} className={customClass}>
      <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/531/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/626/600/400" />
      <ImageGrid.Image imageUrl="https://picsum.photos/id/381/600/400" />
    </Slider>
  )
}
