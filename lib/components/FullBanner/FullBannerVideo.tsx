const videos = [
  { name: 'cu-flyby', description: 'A flyby video of campus with scenic views of buildings and greenery.' },
  { name: 'timelapse-quad', description: 'A timelapse of the main quad showing students and campus life.' },
] as const

type VideoNameKeys = (typeof videos)[number]['name']

export interface FullBannerVideoProps {
  videoName?: VideoNameKeys
}

export const FullBannerVideo = ({ videoName = 'cu-flyby' }: FullBannerVideoProps) => {
  const video = videos.find((v) => v.name === videoName)

  return (
    <div className="relative">
      <video
        className="rounded-none w-full h-auto bg-black"
        autoPlay
        muted
        loop
        controls
        aria-label={video?.description || 'Default video description'}
      >
        <source src={`https://cu-media.s3.amazonaws.com/videos/${videoName}.webm`} type="video/webm" />
        <source src={`https://cu-media.s3.amazonaws.com/videos/${videoName}.mp4`} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
    </div>
  )
}

FullBannerVideo.displayName = 'FullBanner.Video'
