const PlayPauseButton = () => {
  return (
    <div className="absolute right-0 -translate-x-4 lg:-translate-x-6 xl:-translate-x-10 bottom-4 lg:bottom-8 z-50">
      <button
        className="cu-video-controls p-1.5 md:p-3 rounded-lg w-8 h-8 md:w-14 md:h-14 fill-white bg-black/70 hover:bg-cu-red-700 transition-all"
        aria-label="Pause video"
        title="Pause video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M448 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16s16-7.2 16-16l0-352zm128 0c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 352c0 8.8 7.2 16 16 16s16-7.2 16-16l0-352zM288 256L96 416 96 96 288 256zM116.5 71.4c-9.5-7.9-22.8-9.7-34.1-4.4S64 83.6 64 96l0 320c0 12.4 7.2 23.7 18.4 29s24.5 3.6 34.1-4.4l192-160c7.3-6.1 11.5-15.1 11.5-24.6s-4.2-18.5-11.5-24.6l-192-160z" />
        </svg>
      </button>
    </div>
  )
}

export default PlayPauseButton
