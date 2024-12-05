export interface SlideProps {
  children: React.ReactNode
}

export const Slide = ({ children }: SlideProps) => {
  return (
    <div className="slider__slide">
      <div className="px-3">{children}</div>
    </div>
  )
}
