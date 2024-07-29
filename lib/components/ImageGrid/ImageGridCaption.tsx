const opacityValues = Array.from({ length: 21 }, (_, index) => 60 + index)

export interface ImageGridCaptionProps {
  title: string
  content?: string
  link?: string
  opacity?: (typeof opacityValues)[number]
}

export const ImageGridCaption = ({ title, content, link, opacity }: ImageGridCaptionProps) => {
  return (
    <div>
      {title}
      {content && content}
    </div>
  )
}
