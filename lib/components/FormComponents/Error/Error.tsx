import { ReactNode } from 'react'

export interface ErrorProps {
  children: ReactNode
  className?: string
}

export const Error = ({ ...props }: ErrorProps) => {
  return (
    <div className={`font-semibold text-sm error text-cu-red ${props.className ? props.className : ''} `}>
      {props.children}
    </div>
  )
}

export default Error
