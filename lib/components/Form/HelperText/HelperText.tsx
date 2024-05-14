import { textStyles } from '../../../styles/form'

export interface HelperTextProps {
  children: string
  className?: string
}

export const HelperText = ({ ...props }: HelperTextProps) => {
  return <div className={`${textStyles.helper} ${props.className ? props.className : ''}`}>{props.children}</div>
}

export default HelperText
