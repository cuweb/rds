import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'

export interface InputProps extends FieldComponentProps {
  hasPrefix?: React.ReactNode
  hasSuffix?: React.ReactNode
  disabled?: boolean
}

export const Input = ({ ...props }: InputProps) => {
  const { name, hasPrefix, hasSuffix, disabled, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <div className={`${fieldStyles.input} flex items-stretch`}>
      {hasPrefix && hasPrefix}
      <Field
        type="text"
        id={name}
        name={name}
        disabled={disabled}
        className={`border-none w-full ${errorClass} ${disabled ? fieldStyles.disabled : ''} `}
        {...rest}
      />
      {hasSuffix && hasSuffix}
    </div>
  )
}
