export interface SlideProps {
  children: React.ReactNode
  noSpace?: boolean
}

export const Slide = ({ children, noSpace }: SlideProps) => {
  return <div className="slider__slide">{noSpace ? children : <div className="px-3">{children}</div>}</div>
}
