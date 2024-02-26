/* eslint-disable react/no-children-prop */
import * as yup from 'yup'
import { Formik } from 'formik'
import type { FormikHelpers, FormikProps, FormikValues } from 'formik'

import { Input } from '../Input/Input'
import { Radio } from '../Radio/Radio'
import { Select } from '../Select/Select'
import { Upload } from '../Upload/Upload'
import { Button } from '../../../components/Button/Button'
import { WYSIWYG } from '../WYSIWYG/WYSIWYG'
import { Checkbox } from '../Checkbox/Checkbox'
import { DateTimePicker } from '../DateTimePicker/DateTimePicker'
// import { PlacesAutoComplete } from '../PlacesAutoComplete/PlacesAutoComplete'

export interface FormProps {
  children?: ((props: FormikProps<FormikValues>) => React.ReactNode) | React.ReactNode
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
  disabled?: boolean
}

const Submit = ({ title = 'Submit', disabled = false }: SubmitProps) => {
  return <Button type="submit" title={title} isType={disabled ? 'disabled' : 'solid'} />
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
    Object.assign(formValues, { [key]: schema[key].value })
    Object.assign(formRules, { [key]: schema[key].validation })
  })

  return (
    <Formik
      initialValues={initialValues || formValues}
      validationSchema={yup.object().shape(formRules)}
      onSubmit={onSubmit}
      enableReinitialize
      children={children}
    />
  )
}

export const Form = Object.assign(FormBase, {
  Input,
  Select,
  Checkbox,
  Radio,
  Upload,
  Submit,
  WYSIWYG,
  DateTimePicker,
  // PlacesAutoComplete,
})

FormBase.displayName = 'Form'
Submit.displayName = 'Form.Submit'
