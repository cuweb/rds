/* eslint-disable react/no-children-prop */
import * as yup from 'yup'
import { Formik } from 'formik'
import type { FormikHelpers, FormikValues } from 'formik'

import { Input } from '../Input/Input'
import { Radio } from '../Radio/Radio'
import { Select } from '../Select/Select'
import { Button } from '../../Button/Button'
import { WYSIWYG } from '../WYSIWYG/WYSIWYG'
import { Checkbox } from '../Checkbox/Checkbox'
import { DateTimePicker } from '../DateTimePicker/DateTimePicker'
import { PlacesAutoComplete } from '../PlacesAutoComplete/PlacesAutoComplete'
import { PropsWithChildren } from 'react'

export interface FormProps {
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
}: PropsWithChildren<FormProps>) => {
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
      children={children}
    />
  )
}

export const Form = Object.assign(FormBase, {
  Input,
  Select,
  Checkbox,
  Radio,
  Submit,
  WYSIWYG,
  DateTimePicker,
  PlacesAutoComplete,
})

FormBase.displayName = 'Form'
Submit.displayName = 'Form.Submit'
