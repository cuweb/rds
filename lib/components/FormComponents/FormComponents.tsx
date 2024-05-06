/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProvider } from 'formik'
import { FieldGroup } from './FieldGroup/FieldGroup'
import { FieldControl } from './FieldControl/FieldControl'
import { primaryStyles } from '../../styles/form'
import { Editor } from './Editor/Editor'

export interface FormComponentsWrapperProps {
  children: React.ReactNode
  formikProps: any
}

export const FormComponentsWrapper = ({ children, formikProps }: FormComponentsWrapperProps) => {
  return (
    <FormikProvider value={formikProps}>
      <form onSubmit={formikProps.handleSubmit} className={primaryStyles.form}>
        {children}
      </form>
    </FormikProvider>
  )
}

export const FormComponents = Object.assign(FormComponentsWrapper, {
  FieldGroup: FieldGroup,
  FieldControl: FieldControl,
  Editor: Editor,
})
