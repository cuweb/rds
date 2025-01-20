const VideoControls = (): void => {
  const video = document.getElementById('video-banner') as HTMLVideoElement | null
  const playPauseButton = document.getElementById('video_controls_button') as HTMLButtonElement | null

  if (!video || !playPauseButton) {
    console.warn('Video, Play/Pause button not found')
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
}

export default VideoControls
