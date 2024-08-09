import React, { MouseEventHandler, useMemo, useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { useFormik } from 'formik'
import { FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { Form } from './Form'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { AutoSuggestData } from './../../data/AutoSuggestData'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Form>

export const Input: Story = () => {
  type IInput = {
    inputText: string
  }

  const InputInitialValues = {
    inputText: '',
  }

  const InputValidationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required'),
  })

  const onSubmit = async (values: IInput, actions: FormikHelpers<IInput>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const onReset: MouseEventHandler<HTMLButtonElement> = () => {
    formikProps.resetForm()
  }

  const formikProps = useFormik({
    initialValues: InputInitialValues,
    validationSchema: InputValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="text"
          label="Label"
          name="inputText"
          required
          helper="Helper Text"
          helperpostop
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
        <Button title="Reset" type="reset" color="grey" onClick={onReset} />
      </ButtonGroup>
    </Form>
  )
}

export const TextArea: Story = () => {
  type ITextArea = {
    textareainput: string
  }

  const TextAreaInitialValues = {
    textareainput: '',
  }

  const TextAreaValidationSchema = Yup.object().shape({
    textareainput: Yup.string().required('The field is required'),
  })

  const onSubmit = async (values: ITextArea, actions: FormikHelpers<ITextArea>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: TextAreaInitialValues,
    validationSchema: TextAreaValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="textarea"
          label="Label"
          name="textareainput"
          required
          helper="Helper Text"
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const Editor: Story = () => {
  type IEditor = {
    editor: string
  }

  const EditorInitialValues = {
    editor: '<h2>H2 Heading</h2>',
  }

  const EditorValidationSchema = Yup.object().shape({
    editor: Yup.string().required('Content is required'),
  })

  const onSubmit = async (values: IEditor, actions: FormikHelpers<IEditor>) => {
    actions.setSubmitting(true)
    await sleep(1000)
    alert(JSON.stringify(values, null, 2))
    console.log(values)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: EditorInitialValues,
    validationSchema: EditorValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.Editor
          label="Editor"
          name="editor"
          helper="Helper Text"
          value={formikProps.values.editor}
          placeholder="Text goes here..."
          required={true}
          disabled={formikProps.isSubmitting}
          onChange={() => {
            console.log('Changing')
          }}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const CheckBox: Story = () => {
  type ICheckBox = {
    checkbox: string[]
  }

  const CheckBoxInitialValues = {
    checkbox: ['no'],
  }

  const CheckBoxValidationSchema = Yup.object().shape({
    checkbox: Yup.array().min(1, 'Please select at least one checkbox').required('Required'),
  })

  const onSubmit = async (values: ICheckBox, actions: FormikHelpers<ICheckBox>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: CheckBoxInitialValues,
    validationSchema: CheckBoxValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="checkbox"
          name="checkbox"
          label="I acknowledge the statements above."
          options={[
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ]}
          required
          isInline
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const Radio: Story = () => {
  type IRadio = {
    radio: string
  }

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  const radioInitialValues = {
    radio: 'option2',
  }

  const radioValidationSchema = Yup.object().shape({
    radio: Yup.string().required('Field value is required.'),
  })

  const onSubmit = async (values: IRadio, actions: FormikHelpers<IRadio>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: radioInitialValues,
    validationSchema: radioValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="radio"
          label="Label"
          name="radio"
          options={options}
          isInline
          required
          disabled={formikProps.isSubmitting}
          helper="Helper Text"
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const Select: Story = () => {
  type ISelect = {
    select: string
  }

  const selectValues = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]

  const selectInitialValues = {
    select: '2',
  }

  const selectValidationSchema = Yup.object().shape({
    select: Yup.string(),
  })

  const onSubmit = async (values: ISelect, actions: FormikHelpers<ISelect>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: selectInitialValues,
    validationSchema: selectValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="select"
          label="Select"
          name="select"
          options={selectValues}
          required
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const SimpleDate: Story = () => {
  type IDate = {
    startDate: string
    endDate: string
  }

  const dateInitialValues = {
    startDate: '',
    endDate: '',
  }

  const dateValidationSchema = Yup.object().shape({
    startDate: Yup.lazy(() => {
      return Yup.date()
        .required('Please select start date')
        .when('endDate', (endDate, schema) => {
          if (endDate[0]) {
            return schema.required("Start date can't be after end date")
          }
          return schema
        })
    }),
    endDate: Yup.date()
      .required('Please select end date')
      .when('startDate', (startDate, schema) => {
        if (startDate[0]) {
          return schema.required("End date can't be before start date")
        }
        return schema
      }),
  })

  const onSubmit = async (values: IDate, actions: FormikHelpers<IDate>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: dateInitialValues,
    validationSchema: dateValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup cols={2}>
        <Form.FieldControl
          required
          control="datetime"
          label="Start Date"
          name="startDate"
          maxDate={formikProps.values.endDate}
          disabled={formikProps.isSubmitting}
        />
        <Form.FieldControl
          required
          control="datetime"
          label="End Date"
          name="endDate"
          minDate={formikProps.values.startDate}
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const DateTime: Story = () => {
  type IDateTime = {
    startDate: string
    endDate: string
  }

  const dateTimeInitialValues = {
    startDate: '',
    endDate: '',
  }

  const dateTimeValidationSchema = Yup.object().shape({
    startDate: Yup.lazy(() => {
      return Yup.date()
        .required('Please select start date')
        .when('endDate', (endDate, schema) => {
          if (endDate[0]) {
            return schema.required("Start date can't be after end date")
          }
          return schema
        })
    }),
    endDate: Yup.date()
      .required('Please select end date')
      .when('startDate', (startDate, schema) => {
        if (startDate[0]) {
          return schema.required("End date can't be before start date")
        }
        return schema
      }),
  })

  const onSubmit = async (values: IDateTime, actions: FormikHelpers<IDateTime>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: dateTimeInitialValues,
    validationSchema: dateTimeValidationSchema,
    onSubmit,
  })

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const defaultMinTime = new Date()
  defaultMinTime.setHours(0, 0, 0, 0)

  const defaultMaxTime = new Date()
  defaultMaxTime.setHours(23, 59, 59, 999)

  const minStartTime = useMemo(() => {
    const todayDate = new Date()
    todayDate.setHours(0, 0, 0, 0)
    if (startDate) {
      const selectedDate = new Date(startDate)
      selectedDate.setHours(0, 0, 0, 0)
      if (selectedDate.getTime() === todayDate.getTime()) {
        return new Date()
      }
    }
    return defaultMinTime
  }, [startDate, defaultMinTime])

  const maxStartTime = useMemo(() => {
    if (startDate) {
      const maxTime = new Date(startDate)
      maxTime.setHours(23, 59, 59, 999)
      return maxTime
    }
    return defaultMaxTime
  }, [startDate, defaultMaxTime])

  const minEndTime = useMemo(() => {
    const todayDate = new Date()
    todayDate.setHours(0, 0, 0, 0)

    if (startDate) {
      const minEndTime = new Date(startDate)
      minEndTime.setMinutes(minEndTime.getMinutes() + 1)
      return minEndTime
    } else if (endDate && endDate.getTime() === todayDate.getTime()) {
      const minEndTime = new Date(endDate)
      minEndTime.setMinutes(minEndTime.getMinutes() + 1)
      return minEndTime
    }
    return defaultMinTime
  }, [startDate, endDate, defaultMinTime])

  const maxEndTime = useMemo(() => {
    if (endDate) {
      const maxTime = new Date(endDate)
      maxTime.setHours(23, 59, 59, 999)
      return maxTime
    }
    return defaultMaxTime
  }, [endDate, defaultMaxTime])

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup cols={2}>
        <Form.FieldControl
          required
          control="datetime"
          label="Start Date"
          name="startDate"
          maxDate={formikProps.values.endDate}
          disabled={formikProps.isSubmitting}
          showTime={true}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeFormat="HH:mm"
          minTime={minStartTime}
          maxTime={maxStartTime}
          onChange={(date: Date) => {
            setStartDate(date)
          }}
        />
        <Form.FieldControl
          required
          control="datetime"
          label="End Date"
          name="endDate"
          minDate={formikProps.values.startDate}
          disabled={formikProps.isSubmitting}
          showTime={true}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeFormat="HH:mm"
          minTime={minEndTime}
          maxTime={maxEndTime}
          onChange={(date: Date) => {
            setEndDate(date)
          }}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const Media: Story = () => {
  type IMedia = {
    image: File[]
    file: File[]
  }

  const MediaInitialValues = {
    image: [],
    file: [],
  }

  const MediaValidationSchema = Yup.object().shape({
    image: Yup.mixed()
      .test('fileSize', 'The image is required', (value) => {
        return value && value.length > 0
      })
      .required('The field is required'),
    file: Yup.mixed()
      .test('fileSize', 'The file is required', (value) => {
        return value && value.length > 0
      })
      .required('The field is required'),
  })

  const onSubmit = async (values: IMedia, actions: FormikHelpers<IMedia>) => {
    actions.setSubmitting(true)
    console.log(values, 'values')
    alert('Please check console log')
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: MediaInitialValues,
    validationSchema: MediaValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="fileUpload"
          label="Images"
          name="image"
          required
          helper="Helper Text"
          accept="image/*"
          multiple="multiple"
          disabled={formikProps.isSubmitting}
          helperpostop
        />
        <Form.FieldControl
          control="fileUpload"
          label="Media"
          name="file"
          required
          helper="Helper Text"
          accept="application/pdf,application/vnd.ms-excel"
          multiple="multiple"
          disabled={formikProps.isSubmitting}
          helperpostop
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

export const AutoSuggest: Story = () => {
  type IAutoSuggest = {
    text: string
  }

  const autoSuggestInitialValues = {
    text: '',
  }

  const autoSuggestValidationSchema = Yup.object().shape({
    text: Yup.string(),
  })

  const onSubmit = async (values: IAutoSuggest, actions: FormikHelpers<IAutoSuggest>) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: autoSuggestInitialValues,
    validationSchema: autoSuggestValidationSchema,
    onSubmit,
  })

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="autosuggest"
          label="Text"
          name="text"
          placeholder="Placeholder"
          disabled={formikProps.isSubmitting}
          options={AutoSuggestData}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}
