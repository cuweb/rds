import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
// import { InputAddon } from '../InputAddon/InputAddon'
import useErrorClass from '../UseError'

// export interface InputAddonProps extends FieldComponentProps {
//   hasPrefix?: React.ReactNode
//   hasSuffix?: React.ReactNode
// }

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

export interface InputAddonProps {
  children: React.ReactNode
  border?: 'none' | 'left' | 'right'
  isGrey?: boolean
}

const InputAddon = ({ children, ...props }: InputAddonProps) => {
  const { border, isGrey } = props

  let greyBg = ''
  let hasBorder = ''

  switch (border) {
    case 'left':
      greyBg = isGrey ? 'rounded-r-md bg-cu-black-50' : ''
      hasBorder = `border-l border-cu-black-200 ${greyBg}`
      break
    case 'right':
      greyBg = isGrey ? 'rounded-l-md bg-cu-black-50' : ''
      hasBorder = `border-r border-cu-black-200 ${greyBg}`
      break

    default:
      break
  }

  return <span className={`px-4 flex items-center ${hasBorder}`}>{children}</span>
}
