/* eslint-disable storybook/no-redundant-story-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import FormikForm from './FormikForm/FormikForm'
import FieldGroup from './FieldGroup/FieldGroup'
import { FieldControl } from './FieldControl/FieldControl'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { FormButton } from './FormButton/FormButton'
import fileUploadValidationSchema from '../../helpers/fileUploadValidationSchema'
import imageUploadValidationSchema from '../../helpers/imageUploadValidationSchema'

const meta: Meta<typeof FieldControl> = {
  title: 'Components/Form',
  component: FieldControl,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof FieldControl>

const options = [
  { key: 'Option 1', value: 'Option 1' },
  { key: 'Option 2', value: 'Option 2' },
  { key: 'Option 3', value: 'Option 3', checked: true },
]

const selectValues = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]

export const Input: Story = () => {
  const InputInitialValues = {
    inputText: '',
  }

  const InputValidationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required'),
  })
  return (
    <Formik
      initialValues={InputInitialValues}
      validationSchema={InputValidationSchema}
      validateOnBlur={true}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl
              control="text"
              label="Label"
              name="inputText"
              placeholder="Placeholder"
              disabled={isSubmitting}
              required
              helper="Helper Text"
            />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

Input.storyName = 'Input'

export const TextArea: Story = () => {
  const TextAreaInitialValues = {
    textArea: '',
  }

  const TextAreaValidationSchema = Yup.object().shape({
    textArea: Yup.string().required('The field is required'),
  })
  return (
    <Formik
      initialValues={TextAreaInitialValues}
      validationSchema={TextAreaValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl control="textarea" label="Textarea" name="textArea" placeholder="Text Area" rows="2" />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

TextArea.storyName = 'TextArea'

export const WYSIWYG: Story = () => {
  const WysiwygInitialValues = {
    wysiwyg: '',
  }

  const WysiwygValidationSchema = Yup.object().shape({
    wysiwyg: Yup.string().required('The field is required'),
  })

  return (
    <Formik
      initialValues={WysiwygInitialValues}
      validationSchema={WysiwygValidationSchema}
      validateOnBlur={true}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl control="wysiwyg" label="Wysiwyg Example" name="wysiwyg" placeholder="Placeholder" required />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

WYSIWYG.storyName = 'WYSIWYG'

export const CheckBox: Story = () => {
  const CheckBoxInitialValues = {
    checkbox: 'yes',
  }

  const CheckBoxValidationSchema = Yup.object().shape({
    checkbox: Yup.array().of(Yup.string()),
  })
  return (
    <Formik
      initialValues={CheckBoxInitialValues}
      validationSchema={CheckBoxValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl
              control="checkbox"
              name="checkbox"
              label="I acknowledge the statements above."
              options={[
                {
                  key: 'Yes',
                  value: 'yes',
                  checked: true,
                },
              ]}
              required
              disabled={isSubmitting}
            />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

CheckBox.storyName = 'CheckBox'

export const Radio: Story = () => {
  const radioInitialValues = {
    radio: 'Option 1',
  }

  const radioValidationSchema = Yup.object().shape({
    radio: Yup.string(),
  })
  return (
    <Formik
      initialValues={radioInitialValues}
      validationSchema={radioValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl
              control="radio"
              label="Label"
              name="radio"
              options={options}
              isInline
              required
              disabled={isSubmitting}
              helper="Helper Text"
            />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

Radio.storyName = 'Radio'

export const Select: Story = () => {
  const selectInitialValues = {
    select: 'Option 1',
  }

  const selectValidationSchema = Yup.object().shape({
    select: Yup.string(),
  })
  return (
    <Formik
      initialValues={selectInitialValues}
      validationSchema={selectValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl
              control="select"
              label="Select"
              name="select"
              options={selectValues}
              required
              disabled={isSubmitting}
            />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

Select.storyName = 'Select'

export const DateTime: Story = () => {
  const dateTimeInitialValues = {
    startDate: null,
    endDate: null,
  }

  const dateTimeValidationSchema = Yup.object().shape({
    startDate: Yup.date().nullable(),
    endDate: Yup.date().nullable(),
  })
  return (
    <Formik
      initialValues={dateTimeInitialValues}
      validationSchema={dateTimeValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup cols={2}>
            <FieldControl control="datetime" label="Start Date" name="startDate" disabled={isSubmitting} />
            <FieldControl control="datetime" label="End Date" name="endDate" disabled={isSubmitting} />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

DateTime.storyName = 'DateTime'

export const FileUpload: Story = () => {
  const fileUploadInitialValues = {
    file: undefined,
  }
  return (
    <Formik
      initialValues={fileUploadInitialValues}
      validationSchema={fileUploadValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup cols={2}>
            <FieldControl
              control="fileUpload"
              label="File Upload"
              name="file"
              placeholder="File Upload"
              required
              disabled={isSubmitting}
            />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

FileUpload.storyName = 'File Upload'

export const ImageUpload: Story = () => {
  const imageUploadInitialValues = {
    file: undefined,
  }
  return (
    <Formik
      initialValues={imageUploadInitialValues}
      validationSchema={imageUploadValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup cols={2}>
            <FieldControl
              control="imageUpload"
              label="Image Upload"
              name="image"
              placeholder="Image Upload"
              required
              disabled={isSubmitting}
            />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

ImageUpload.storyName = 'Image Upload'

export const AutoSuggest: Story = () => {
  const autoSuggestInitialValues = {
    text: '',
  }

  const autoSuggestValidationSchema = Yup.object().shape({
    text: Yup.string(),
  })
  return (
    <Formik
      initialValues={autoSuggestInitialValues}
      validationSchema={autoSuggestValidationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true)
        alert(JSON.stringify(values, null, 2))
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <FieldGroup>
            <FieldControl control="text" label="Text" name="text" placeholder="Placeholder" disabled={isSubmitting} />
          </FieldGroup>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </FormikForm>
      )}
    </Formik>
  )
}

AutoSuggest.storyName = 'Auto Suggest'
