import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
import { InputAddon } from '../InputAddon/InputAddon'
import useErrorClass from '../UseError'

export const Input = ({ ...props }: FieldComponentProps) => {
  const { name, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <div className={`${fieldStyles.input} ${fieldStyles.disabled} flex items-stretch`}>
      <InputAddon border="right" isGrey>
        $
      </InputAddon>
      <Field type="text" id={name} name={name} className={`border-none w-full ${errorClass}`} {...rest} />
      <InputAddon border="left" isGrey>
        Poop
      </InputAddon>
    </div>
  )
}
