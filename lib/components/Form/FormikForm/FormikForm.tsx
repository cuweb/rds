import { primaryStyles } from '../../../styles/form'
import { Form } from 'formik'

export interface FormProps {
  children: React.ReactNode
  method?: 'GET' | 'POST'
}

export const FormikForm = ({ children, method = 'POST' }: FormProps) => {
  return (
    <Form method={method} className={primaryStyles.form}>
      {children}
    </Form>
  )
}

export default FormikForm
