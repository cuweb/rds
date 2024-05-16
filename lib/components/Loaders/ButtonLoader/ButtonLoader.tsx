interface ButtonLoaderProps {
  number: number
  isSmall: boolean
}
export const ButtonLoader = ({ number, isSmall = true }: ButtonLoaderProps) => {
  return (
    <div className="cu-loader-button cu-block-spacing flex gap-5 animate-pulse">
      {Array.from({ length: number }, (_: number, numberIndex: number) => (
        <div className={`block rounded-md w-44 bg-cu-black-100 ${isSmall ? 'h-9' : 'h-12'}`} key={numberIndex}></div>
      ))}
    </div>
  )
}
