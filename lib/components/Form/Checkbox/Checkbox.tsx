import { Field } from 'formik'
import { FieldSetComponentProps } from '../FormFieldSet/FormFieldSet'
import { fieldStyles } from '../../../styles/form'
import useErrorClass from '../UseError'

export interface CheckboxProps extends FieldSetComponentProps {
  checkBoxRight?: boolean
  options?: {
    label: string
    value: string
  }[]
}

export const Checkbox = ({ ...props }: CheckboxProps) => {
  const { name, options, checkBoxRight, ...rest } = props
  const errorClass = useErrorClass(name)

  return (
    <>
      {options &&
        options.map((option) => (
          <label key={option.value} className={checkBoxRight ? fieldStyles.radioCheckRight : fieldStyles.radioCheck}>
            <Field
              type="checkbox"
              name={name}
              value={option.value}
              className={`${fieldStyles.disabled} ${errorClass}`}
              {...rest}
            />
            {option.label}
          </label>
        ))}
    </>
  )
}
