import { primaryStyles } from '../../styles/form'
import { Form } from 'formik'
import FieldGroup from './FieldGroup/FieldGroup'
import { FieldControl } from './FieldControl/FieldControl'
import { FormButton } from './FormButton/FormButton'

export interface FormProps {
  children: React.ReactNode
  method?: 'GET' | 'POST'
}

export const FormikFormWrapper = ({ children, method = 'POST' }: FormProps) => {
  return (
    <Form method={method} className={primaryStyles.form}>
      {children}
    </Form>
  )
}

export const FormikForm = Object.assign(FormikFormWrapper, {
  FieldGroup: FieldGroup,
  FieldControl: FieldControl,
  FormButton: FormButton,
})
