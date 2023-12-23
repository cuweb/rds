export interface CardIconBoxProps {
  icon?: string
}

export const CardIconBox = ({ icon }: CardIconBoxProps) => {
  const iconFont = icon ? '' : ''
  return <div className="w-16 h-16 mx-6 mt-6 mb-2 rounded-md bg-cu-red">{iconFont}</div>
}

CardIconBox.displayName = 'Card.IconBox'
