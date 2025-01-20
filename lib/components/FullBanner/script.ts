const VideoControls = (): void => {
  const video = document.getElementById('video') as HTMLVideoElement | null
  const playButton = document.getElementById('video_play_button') as HTMLButtonElement | null
  const pauseButton = document.getElementById('video_pause_button') as HTMLButtonElement | null

  if (!video || !playButton || !pauseButton) {
    console.warn('Video, play button, or pause button not found')
    return
  }

  const toggleButtonState = (isPlaying: boolean) => {
    playButton.disabled = isPlaying
    pauseButton.disabled = !isPlaying
    playButton.classList.toggle('cu-button--icon-disabled', isPlaying)
    pauseButton.classList.toggle('cu-button--icon-disabled', !isPlaying)
  }

  const handlePlay = (): void => {
    if (video.paused) {
      console.log('Play the video')
      video.play()
      toggleButtonState(true)
    } else {
      console.log('Pause the video')
      video.pause()
      toggleButtonState(false)
    }
  }

  playButton.addEventListener('click', handlePlay)
  pauseButton.addEventListener('click', handlePlay)
}

export default VideoControls
