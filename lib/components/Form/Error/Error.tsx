import { ReactNode } from 'react'
import { fieldStyles } from '../form.Styles'

export interface ErrorProps {
  children: ReactNode
  className?: string
}

export const Error = ({ ...props }: ErrorProps) => {
  return <div className={`${fieldStyles.errorFormik} ${props.className ? props.className : ''} `}>{props.children}</div>
}

export default Error
