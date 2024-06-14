/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProvider } from 'formik'
import { FieldGroup } from './FieldGroup/FieldGroup'
import { FieldControl } from './FieldControl/FieldControl'
import { primaryStyles } from '../../styles/form'
import { Editor } from './Editor/Editor'

export interface FormWrapperProps {
  children: React.ReactNode
  formikProps: any
}

export const FormWrapper = ({ children, formikProps }: FormWrapperProps) => {
  return (
    <FormikProvider value={formikProps}>
      <form onSubmit={formikProps.handleSubmit} className={`cu-form cu-component-spacing ${primaryStyles.form}`}>
        {children}
      </form>
    </FormikProvider>
  )
}

export const Form = Object.assign(FormWrapper, {
  FieldGroup: FieldGroup,
  FieldControl: FieldControl,
  Editor: Editor,
})
