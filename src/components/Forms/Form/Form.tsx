import * as yup from 'yup'
import { Form as FormWrapper, Formik } from 'formik'

import { Input } from '../Input/Input'
import { Radio } from '../Radio/Radio'
import { Select } from '../Select/Select'
import { Button } from '../../Button/Button'
import { WYSIWYG } from '../WYSIWYG/WYSIWYG'
import { Checkbox } from '../Checkbox/Checkbox'

export interface FormProps {
  children?: React.ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  initialValues?: {
    [k: string]: string | number | undefined | unknown
  }
  schema: {
    [k: string]: {
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
  const defaults: any = {}
  const rules: any = {}

  Object.keys(schema).map((key) => {
    defaults[key] = schema[key].value
    rules[key] = schema[key].validation
    return [defaults, rules] as const
  })

  return (
    <Formik
      initialValues={initialValues || defaults}
      validationSchema={yup.object().shape(rules)}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <FormWrapper className="space-y-5 not-prose">{children}</FormWrapper>
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
