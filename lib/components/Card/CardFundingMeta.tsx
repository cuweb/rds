import { Icon } from '../Icon'
import { useEffect, useState } from 'react'

interface CardFundingMetaProps {
  raised: number
  goal: number
  daysLeft: number
  showPercentage?: boolean
}

const styles = {
  redIcon: 'flex-shrink-0 mr-2',
  iconSize: 16,
  iconColor: '#808080',
}

export function CardFundingMeta({ raised, goal, daysLeft, showPercentage = true }: CardFundingMetaProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0)
  const percentage = (raised / goal) * 100

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage)
    }, 100)
    return () => clearTimeout(timer)
  }, [percentage])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getTimeText = () => {
    if (daysLeft === 0) return 'Last day'
    if (daysLeft === 1) return '1 day left'
    if (daysLeft < 30) return `${daysLeft} days left`
    const months = Math.floor(daysLeft / 30)
    return months === 1 ? '1 month left' : `${months} months left`
  }

  return (
    <div>
      {/* Amount Display */}
      <div className="flex items-baseline gap-0 flex-wrap">
        <span className="font-bold text-sm md:text-base text-cu-black">{formatCurrency(raised)}</span>
        <span className="text-xs text-slate-500 px-1">raised out of</span>
        <span className="text-sm md:text-base font-bold text-cu-black">{formatCurrency(goal)}</span>
      </div>

      {/* Progress Bar */}
      <div className="h-3 bg-slate-200 rounded-full overflow-hidden mt-2 mb-3.5">
        <div
          className="h-full bg-gradient-to-r from-cu-red-400 to-cu-red-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>

      {/* Bottom Info */}
      <div className="flex items-center justify-between">
        {/* Time Left */}
        <div className="flex items-center">
          <Icon name="clock" size={styles.iconSize} color={styles.iconColor} className={styles.redIcon} />
          <span className="text-xs font-medium text-cu-black-600">{getTimeText()}</span>
        </div>

        {/* Percentage */}
        {showPercentage && <span className="text-xs font-medium text-cu-black-600">{percentage.toFixed(2)}%</span>}
      </div>
    </div>
  )
}
