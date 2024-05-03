/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form } from 'formik'
import { FieldControl } from './FieldControl/FieldControl'

export interface FormComponentsWrapperProps {
  children: React.ReactNode
  initialValues: any
  validationSchema: any
  onSubmit: any
  method?: 'GET' | 'POST'
}

export const FormComponentsWrapper = ({
  children,
  onSubmit,
  initialValues,
  validationSchema,
  method = 'POST',
}: FormComponentsWrapperProps) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur={true} onSubmit={onSubmit}>
      <Form method={method}>{children}</Form>
    </Formik>
  )
}

export const FormComponents = Object.assign(FormComponentsWrapper, {
  FieldControl: FieldControl,
})
