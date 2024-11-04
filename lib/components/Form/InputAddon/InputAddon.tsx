export interface InputAddonProps {
  children: React.ReactNode
  border?: 'none' | 'left' | 'right'
  isGrey?: boolean
}

export const InputAddon = ({ children, ...props }: InputAddonProps) => {
  const { border, isGrey } = props

  let greyBg = ''
  let hasBorder = ''

  switch (border) {
    case 'left':
      greyBg = isGrey ? 'rounded-r-md bg-cu-black-50' : ''
      hasBorder = `border-l border-cu-black-200 ${greyBg}`
      break
    case 'right':
      greyBg = isGrey ? 'rounded-l-md bg-cu-black-50' : ''
      hasBorder = `border-r border-cu-black-200 ${greyBg}`
      break

    default:
      greyBg = ''
      hasBorder = ''
      break
  }

  return <span className={`px-4 flex items-center ${hasBorder}`}>{children}</span>
}

export default InputAddon
