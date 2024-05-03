/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProvider } from 'formik'
import { FieldControl } from './FieldControl/FieldControl'

export interface FormComponentsWrapperProps {
  children: React.ReactNode
  formikProps: any
}

export const FormComponentsWrapper = ({ children, formikProps }: FormComponentsWrapperProps) => {
  return (
    // <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur={true} onSubmit={onSubmit}>
    //   <Form method={method}>{children}</Form>
    // </Formik>
    <FormikProvider value={formikProps}>{children}</FormikProvider>
  )
}

export const FormComponents = Object.assign(FormComponentsWrapper, {
  FieldControl: FieldControl,
})
