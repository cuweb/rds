import * as yup from 'yup'
import { Form as FormWrapper, Formik } from 'formik'
import type { FormikHelpers, FormikValues } from 'formik'

import { Input } from '../Input/Input'
import { Radio } from '../Radio/Radio'
import { Select } from '../Select/Select'
import { Button } from '../../Button/Button'
import { WYSIWYG } from '../WYSIWYG/WYSIWYG'
import { Checkbox } from '../Checkbox/Checkbox'

export interface FormProps {
  children?: React.ReactNode
  onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void
  initialValues?: FormikValues
  schema: {
    [field: string]: {
      value?: unknown
      validation: unknown
      label?: string
    }
  }
}

export interface SubmitProps {
  title?: string
}

const Submit = ({ title = 'Submit' }: SubmitProps) => {
  return <Button type="submit" title={title} />
}

const FormBase = ({
  children,
  onSubmit = (values: unknown) => console.log(values),
  schema,
  initialValues,
}: FormProps) => {
  const formValues: FormikValues = {}
  const formRules = {}

  Object.keys(schema).map((key) => {
    Object.assign(formValues, { key: schema[key].value })
    Object.assign(formRules, { key: schema[key].validation })
  })

  return (
    <Formik
      initialValues={initialValues || formValues}
      validationSchema={yup.object().shape(formRules)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <FormWrapper className="not-prose space-y-5">{children}</FormWrapper>
    </Formik>
  )
}

export const Form = Object.assign(FormBase, {
  Input,
  Select,
  Checkbox,
  Radio,
  Submit,
  WYSIWYG,
})

FormBase.displayName = 'Form'
Submit.displayName = 'Form.Submit'
