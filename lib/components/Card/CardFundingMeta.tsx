import { Icon } from '../Icon'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { formatCurrency } from '../../helpers/formatCurrency'

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
  const percentage = goal > 0 ? (raised / goal) * 100 : 0

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
      <div className="mt-2 mb-3.5">
        <ProgressBar value={raised} max={goal} />
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
