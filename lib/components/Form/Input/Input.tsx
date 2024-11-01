import { Field } from 'formik'
import { fieldStyles } from '../form.Styles'
import { FieldComponentProps } from '../FormField/FormField'
import useErrorClass from '../UseError'
import { Icon } from '../../Icon/Icon'
import { iconSizeClasses, textColorClasses } from '../../../utils/propClasses'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

type textColorKeys = keyof typeof textColorClasses
type iconSizeKeys = keyof typeof iconSizeClasses

interface ExtendedFieldComponentProps extends FieldComponentProps {
  leftIcon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  rightIcon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  color?: textColorKeys
  size?: iconSizeKeys
}

export const Input = ({ ...props }: ExtendedFieldComponentProps) => {
  // const { name, ...rest } = props
  const { name, leftIcon, rightIcon, color, size, ...rest } = props

  const errorClass = useErrorClass(name)

  return (
    <>
      <div className="relative">
        {leftIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon aria-hidden={true} icon={leftIcon} color={color} size={size} />
          </div>
        )}
        <Field
          type="text"
          id={name}
          name={name}
          className={`${fieldStyles.input} ${fieldStyles.disabled} ${errorClass} ${leftIcon ? 'pl-12' : 'pl-4'}
            ${rightIcon ? 'pr-10' : 'pr-4'}`}
          {...rest}
        />
        {/* {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon aria-hidden={true} icon={rightIcon} color={color} size={size} />
            </div>
        )} */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <QuestionMarkCircleIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          id="price"
          name="price"
          type="text"
          placeholder="0.00"
          aria-describedby="price-currency"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span id="price-currency" className="text-gray-500 sm:text-sm">
            USD
          </span>
        </div>
      </div>
    </>
  )
}
