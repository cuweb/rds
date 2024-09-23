import { useEffect } from 'react'
import { DoSlide } from './script'

export interface SliderProp {
  customClass?: string
}

export const Slider = ({ customClass }: SliderProp) => {
  useEffect(() => {
    DoSlide()
  }, [])

  return (
    <div className={`slider ${customClass || ''}`}>
      <div>your content</div>
      <div>your content</div>
      <div>your content</div>
    </div>
  )
}
