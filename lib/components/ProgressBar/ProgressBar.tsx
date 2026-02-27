import { useEffect, useState } from 'react'

interface ProgressBarProps {
  value: number
  max?: number
}

export const ProgressBar = ({ value, max = 100 }: ProgressBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0)

  // Clamp percentage between 0 and 100
  const percentage = max > 0 ? Math.min(Math.round((value / max) * 100), 100) : 0

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage)
    }, 100)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div
      className="h-3 bg-slate-200 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-cu-red-400 to-cu-red-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${animatedWidth}%` }}
      />
    </div>
  )
}

ProgressBar.displayName = 'ProgressBar'
