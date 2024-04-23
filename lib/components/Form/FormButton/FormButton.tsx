import { ButtonHTMLAttributes } from 'react'
import { Button } from '../../Button/Button'

export interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  color?: 'red' | 'grey' | 'dark-grey'
  isOutline?: boolean
  isType?: boolean
}

export const FormButton = ({
  title = 'Submit',
  color = 'red',
  type = 'button',
  disabled = false,
  isOutline,
  ...rest
}: FormButtonProps) => {
  const buttonStyle = isOutline ? 'outline' : 'solid'
  return <Button title={title} color={color} type={type} isType={disabled ? disabled : buttonStyle} {...rest} />
}
