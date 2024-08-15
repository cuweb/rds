/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProvider } from 'formik'
import { FieldGroup } from './FieldGroup/FieldGroup'
import { FieldControl } from './FieldControl/FieldControl'
import { FieldArrayContainer } from './FieldArrayContainer/FieldArrayContainer'
import { primaryStyles } from './form.Styles'
import { Editor } from './Editor/Editor'
import { FormError } from './FormError/FormError'

export interface FormWrapperProps {
  children: React.ReactNode
  formikProps: any
}

export const FormWrapper = ({ children, formikProps }: FormWrapperProps) => {
  return (
    <FormikProvider value={formikProps}>
      <form onSubmit={formikProps.handleSubmit} className={`cu-form cu-component ${primaryStyles.form}`}>
        {children}
      </form>
    </FormikProvider>
  )
}

export const Form = Object.assign(FormWrapper, {
  FieldGroup: FieldGroup,
  FieldControl: FieldControl,
  FieldArrayContainer: FieldArrayContainer,
  Editor: Editor,
  FormError: FormError,
})
