export const ButtonLoader = () => {
  return (
    <button>
      <div className="animate-pulse">
        <div className="flex flex-wrap gap-5">
          <span className="block h-8 rounded-md w-52 bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </button>
  )
}
