import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

export interface CardVideoProps {
  source: string
}

export const CardVideo = ({ source }: CardVideoProps) => {
  const [initialRender, setInitialRender] = useState(false)

  // Run after first render and load the video player
  useEffect(() => {
    setInitialRender(true)
  }, [])

  // Prevent the component from rendering and avoid hydration error
  if (!initialRender) {
    return (
      <div className="relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden">
        <p className="hidden">Loading video</p>
      </div>
    )
  } else {
    return (
      <div className="relative pt-[56.25%] bg-cu-black-800 mb-2 rounded-t-lg overflow-hidden">
        <ReactPlayer url={source} className="absolute top-0 left-0" width="100%" height="100%" controls />
      </div>
    )
  }
}

CardVideo.displayName = 'Card.Video'
