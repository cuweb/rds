import { videos } from './video/video-names-list'
import { useEffect } from 'react'
import VideoControls from './video/VideoControls'
import { PlayPauseButton } from './video/PlayPauseButton'

type VideoNameKeys = (typeof videos)[number]['name']

export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
  PlayPause?: boolean
}

export const BannerVideo = ({ videoName = 'cu-flyby', PlayPause = true }: FullBannerVideoProps) => {
  useEffect(() => {
    VideoControls()
  }, [videoName])

  const video = videos.find((v) => v.name === videoName)

  return (
    <>
      <video
        className="cu-video rounded-none w-full h-auto bg-black"
        autoPlay
        muted
        loop
        controls={false}
        aria-label={video?.description || 'Default video description'}
        id="video-banner"
        tabIndex={-1}
      >
        <source src={`https://cu-media.s3.amazonaws.com/videos/${videoName}.webm`} type="video/webm" />
        <source src={`https://cu-media.s3.amazonaws.com/videos/${videoName}.mp4`} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      {PlayPause && (
        <div className="absolute right-0 -translate-x-4 lg:-translate-x-10 bottom-4 lg:bottom-8 z-50 ">
          <PlayPauseButton />
        </div>
      )}
    </>
  )
}
