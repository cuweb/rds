/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProvider } from 'formik'
import { FieldGroup } from './FieldGroup/FieldGroup'
import { FieldControl } from './FieldControl/FieldControl'
import { FieldArrayContainer } from './FieldArrayContainer/FieldArrayContainer'
import { primaryStyles } from './form.Styles'
import { Error } from './Error/Error'
import FormField from './FormField/FormField'

export interface FormWrapperProps {
  children: React.ReactNode
  formikProps: any
}

export const FormWrapper = ({ children, formikProps }: FormWrapperProps) => {
  return (
    <FormikProvider value={formikProps}>
      <form onSubmit={formikProps.handleSubmit} className={`cu-form cu-component-updated ${primaryStyles.form}`}>
        {children}
      </form>
    </FormikProvider>
  )
}

export const Form = Object.assign(FormWrapper, {
  FieldGroup: FieldGroup,
  FormField: FormField,
  FieldControl: FieldControl,
  FieldArrayContainer: FieldArrayContainer,
  Error: Error,
})
