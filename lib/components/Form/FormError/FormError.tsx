import { ReactNode } from 'react'

export interface FormErrorProps {
  children: ReactNode
  className?: string
}

export const FormError = ({ ...props }: FormErrorProps) => {
  return (
    <div className={`font-semibold text-sm error text-cu-red ${props.className ? props.className : ''} `}>
      {props.children}
    </div>
  )
}

export default FormError
