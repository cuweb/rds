import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

export interface FigureVideoProps {
  source: string
}

const styles = {
  container: `relative pt-[56.25%] bg-cu-black-900`,
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
      <div className={styles.container}>
        <p className="hidden">Loading video</p>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <ReactPlayer url={source} className="absolute top-0 left-0" width="100%" height="100%" controls />
      </div>
    )
  }
}

FigureVideo.displayName = 'Figure.Video'
