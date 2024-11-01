import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export interface InputProps extends FieldComponentProps {
  hasPrefix?: React.ReactNode
  hasSuffix?: React.ReactNode
}

export const Input = ({ ...props }: InputProps) => {
  const { name, hasPrefix, hasSuffix, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <div className={`${fieldStyles.input} ${fieldStyles.disabled} flex items-stretch`}>
      {hasPrefix && hasPrefix}
      <Field type="text" id={name} name={name} className={`border-none rounded-md w-full ${errorClass}`} {...rest} />
      {hasSuffix && hasSuffix}
    </div>
  )
}
