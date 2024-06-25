import React, { MouseEventHandler, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useFormik } from 'formik'
import { FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { Form } from './Form'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'
import { AutoSuggestData } from './../../data/AutoSuggestData'

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Form>

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

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
          helperPosTop={true}
          disable={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
        <Button title="Reset" type="reset" color="grey" onClick={onReset} />
      </ButtonGroup>
    </Form>
  )
}

// Input.storyName = 'Input'

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
          disable={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

// TextArea.storyName = 'TextArea'

export const Editor: Story = () => {
  type IEditor = object

  const [editorContent, setEditorContent] = useState<string | null>(null)
  const [editorError, setEditorError] = useState<boolean>(false)

  const EditorInitialValues = {}

  const EditorValidationSchema = Yup.object().shape({})

  const onSubmit = async (values: IEditor, actions: FormikHelpers<IEditor>) => {
    actions.setSubmitting(true)
    setEditorError(false)

    if (editorContent === null) {
      setEditorError(true)
    } else {
      await sleep(1000)
      alert(editorContent)
      console.log(values, editorContent)
      actions.setSubmitting(false)
    }
  }

  const formikProps = useFormik({
    initialValues: EditorInitialValues,
    validationSchema: EditorValidationSchema,
    onSubmit,
  })

  const initialValue = ''

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.Editor
          label="Editor"
          name="editor"
          helper="Helper Text"
          value={initialValue}
          placeholder="Text goes here..."
          setEditorContent={setEditorContent}
          errorMessage={editorError ? 'Field is required' : ''}
          required
          disable={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

// Editor.storyName = 'Editor'

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

// CheckBox.storyName = 'CheckBox'

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

// Radio.storyName = 'Radio'

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

// Select.storyName = 'Select'

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

// DateTime.storyName = 'DateTime'

export const Media: Story = () => {
  type IMedia = {
    file: FileList | null
  }

  const MediaInitialValues = {
    file: null,
  }

  const MediaValidationSchema = Yup.object().shape({
    file: Yup.mixed().required('The field is required'),
  })

  const onSubmit = async (values: IMedia, actions: FormikHelpers<IMedia>) => {
    actions.setSubmitting(true)
    console.log(values)
    alert('Please check console log')
    await sleep(1000)
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: MediaInitialValues,
    validationSchema: MediaValidationSchema,
    onSubmit,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files) {
      formikProps.setFieldValue('file', files)
    }
  }

  return (
    <Form formikProps={formikProps}>
      <Form.FieldGroup>
        <Form.FieldControl
          control="fileUpload"
          label="Media"
          name="file"
          required
          helper="Helper Text"
          onChange={handleChange}
          accept="application/pdf,application/vnd.ms-excel"
          disabled={formikProps.isSubmitting}
        />
      </Form.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </Form>
  )
}

// Media.storyName = 'Media'

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

// AutoSuggest.storyName = 'AutoSuggest'
