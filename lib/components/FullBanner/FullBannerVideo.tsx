// export interface FullBannerVideoProps {
//   children?: React.ReactNode
// }

export const FullBannerVideo = () => {
  return (
    <div className="relative">
      <video
        className="rounded-none w-full h-auto bg-black"
        autoPlay
        muted
        loop
        playsInline
        controls
        aria-label="Video of a flyby scene"
      >
        <source src="https://cu-media.s3.amazonaws.com/videos/cu-flyby.webm" type="video/webm" />
        <source src="https://cu-media.s3.amazonaws.com/videos/cu-flyby.mp4" type="video/mp4" />
        <track
          src="https://cu-media.s3.amazonaws.com/videos/cu-flyby-captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

FullBannerVideo.displayName = 'FullBanner.Video'
