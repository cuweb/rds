import { ButtonHTMLAttributes } from 'react'
import { Button } from '../../Button/Button'

export interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  color?: 'red' | 'grey' | 'dark-grey'
}

export const FormButton = ({
  title = 'Submit',
  color = 'red',
  type = 'button',
  disabled = false,
  ...rest
}: FormButtonProps) => {
  return <Button title={title} color={color} type={type} disabled={disabled} {...rest} />
}
