import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { videoStyles } from './Figure.Styles'

export interface FigureVideoProps {
  source: string
}

export const FigureVideo = ({ source }: FigureVideoProps) => {
  const [initialRender, setInitialRender] = useState(false)

  // Run after first render and load the video player
  useEffect(() => {
    setInitialRender(true)
  }, [])

  // Prevent the component from rendering and avoid hydration error
  if (!initialRender) {
    return (
      <div className={videoStyles.container}>
        <p className="hidden">Loading video</p>
      </div>
    )
  } else {
    return (
      <div className={videoStyles.container}>
        <ReactPlayer url={source} className={videoStyles.player} width="100%" height="100%" controls />
      </div>
    )
  }
}

FigureVideo.displayName = 'Figure.Video'
