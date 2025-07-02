const VideoControls = (): void => {
  const videos = Array.from(document.getElementsByClassName('cu-video')) as HTMLVideoElement[]

  if (!videos.length) {
    console.warn('No videos found')
    return
  }

  videos.forEach((video) => {
    video.load()

    // Check if the video has already been initialized
    if (video.dataset.initialized === 'true') {
      return
    }

    // Find the parent section element
    const parentSection = video.closest('section')

    const playPauseButton = parentSection?.getElementsByClassName('cu-video-controls')[0] as HTMLButtonElement | null

    if (!playPauseButton) {
      console.warn('Play/Pause button not found for video')
      return
    }

    const toggleButtonState = (isPlaying: boolean) => {
      playPauseButton.setAttribute('aria-label', isPlaying ? 'Pause video' : 'Play video')
      playPauseButton.setAttribute('title', isPlaying ? 'Pause video' : 'Play video')
    }

    const handlePlay = () => {
      if (video.paused) {
        video.play()
        toggleButtonState(true)
      } else {
        video.pause()
        toggleButtonState(false)
      }
    }

    playPauseButton.addEventListener('click', handlePlay)

    // Mark the video as initialized
    video.dataset.initialized = 'true'
  })
}

export default VideoControls
