const videos = [
  { name: 'cu-flyby', description: 'A flyby video of campus with scenic views of buildings and greenery.' },
  { name: 'timelapse-quad', description: 'A timelapse of the main quad showing students and campus life.' },
] as const

type VideoNameKeys = (typeof videos)[number]['name']
import { useEffect } from 'react'
import VideoControls from './script'
export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
}

export const FullBannerVideo = ({ videoName = 'cu-flyby' }: FullBannerVideoProps) => {
  useEffect(() => {
    VideoControls()
  }, [])

  const video = videos.find((v) => v.name === videoName)

  return (
    <div className="relative">
      <video
        className="rounded-none w-full h-auto bg-black"
        autoPlay
        muted
        loop
        controls={false}
        aria-label={video?.description || 'Default video description'}
        id="video"
        tabIndex={-1}
      >
        <source src={`https://cu-media.s3.amazonaws.com/videos/${videoName}.webm`} type="video/webm" />
        <source src={`https://cu-media.s3.amazonaws.com/videos/${videoName}.mp4`} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <div className="video__controls bg-black/70 p-3 rounded-lg lg:absolute lg:right-10 lg:bottom-8 z-10 flex items-center justify-center gap-2">
        <button
          className="video__play-button w-8 h-8 cu-button--icon-disabled"
          disabled={true}
          aria-label="Play video"
          title="Play video"
          id="video_play_button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-8 h-8 fill-white">
            <path d="M56.3 66.3c-4.9-3-11.1-3.1-16.2-.3s-8.2 8.2-8.2 14l0 352c0 5.8 3.1 11.1 8.2 14s11.2 2.7 16.2-.3l288-176c4.8-2.9 7.7-8.1 7.7-13.7s-2.9-10.7-7.7-13.7l-288-176zM24.5 38.1C39.7 29.6 58.2 30 73 39L361 215c14.3 8.7 23 24.2 23 41s-8.7 32.2-23 41L73 473c-14.8 9.1-33.4 9.4-48.5 .9S0 449.4 0 432L0 80C0 62.6 9.4 46.6 24.5 38.1z" />
          </svg>
        </button>
        <button
          className="video__pause-button w-8 h-8"
          aria-label="Pause video"
          title="Pause video"
          id="video_pause_button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-8 h-8 fill-white">
            <path d="M48 96c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L48 96zM0 112C0 85.5 21.5 64 48 64l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48L0 112zM224 96c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16l-48 0zm-48 16c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48l0-288z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

FullBannerVideo.displayName = 'FullBanner.Video'
