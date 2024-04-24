/* eslint-disable storybook/no-redundant-story-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FieldWrapper from './FieldWrapper/FieldWrapper'
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

const initialValues = {
  text: '',
  checkbox: 'yes',
  startDate: null,
  endDate: null,
  file: undefined,
  image: undefined,
  inputText: undefined,
  radio: 'Option 1',
  select: 'Option 1',
  textArea: undefined,
  wysiwyg: undefined,
}

const validationSchema = Yup.object().shape({
  text: Yup.string(),
  checkbox: Yup.array().of(Yup.string()),
  startDate: Yup.date().nullable(),
  endDate: Yup.date().nullable(),
  file: fileUploadValidationSchema,
  image: imageUploadValidationSchema,
  inputText: Yup.string(),
  radio: Yup.string(),
  select: Yup.string(),
  textArea: Yup.string(),
  wysiwyg: Yup.string(),
})

const options = [
  { key: 'Option 1', value: 'Option 1' },
  { key: 'Option 2', value: 'Option 2' },
]

const selectValues = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]

const handleSubmit = async (formData: any, { setSubmitting }: any) => {
  try {
    console.log(formData)
  } catch (error) {
    console.error('Error submitting form: ', error)
  } finally {
    setSubmitting(false)
  }
}

export const AutoSuggest: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl control="text" label="Text" name="text" placeholder="Placeholder" disabled={isSubmitting} />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

AutoSuggest.storyName = 'Auto Suggest'

export const CheckBox: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl
              control="checkbox"
              name="checkbox"
              label="I acknowledge the statements above."
              options={[
                {
                  key: 'Yes',
                  value: 'yes',
                },
              ]}
              required
              disabled={isSubmitting}
            />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

CheckBox.storyName = 'Check Box'

export const DateTime: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper cols={2}>
            <FieldControl control="datetime" label="Start Date" name="startDate" disabled={isSubmitting} />
            <FieldControl control="datetime" label="End Date" name="endDate" disabled={isSubmitting} />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

DateTime.storyName = 'Date Time'

export const FileUpload: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper cols={2}>
            <FieldControl
              control="fileUpload"
              label="File Upload"
              name="file"
              placeholder="File Upload"
              required
              disabled={isSubmitting}
            />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

FileUpload.storyName = 'File Upload'

export const ImageUpload: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper cols={2}>
            <FieldControl
              control="imageUpload"
              label="Image Upload"
              name="image"
              placeholder="Image Upload"
              required
              disabled={isSubmitting}
            />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

ImageUpload.storyName = 'Image Upload'

export const Input: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl
              control="text"
              label="inputText"
              name="inputText"
              placeholder="Placeholder"
              disabled={isSubmitting}
            />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

Input.storyName = 'Input'

export const Radio: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl
              control="radio"
              label="Radio"
              name="radio"
              options={options}
              isInline
              required
              disabled={isSubmitting}
            />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

Radio.storyName = 'Radio'

export const Select: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl
              control="select"
              label="Select"
              name="select"
              options={selectValues}
              required
              disabled={isSubmitting}
            />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

Select.storyName = 'Select'

export const TextArea: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl control="textarea" label="Textarea" name="textArea" placeholder="Text Area" rows="2" />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

TextArea.storyName = 'Text Area'

export const WYGIWYS: Story = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form method="post">
          <FieldWrapper>
            <FieldControl control="wysiwyg" name="wysiwyg" />
          </FieldWrapper>
          <ButtonGroup>
            <FormButton title={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} type="submit" />
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  )
}

WYGIWYS.storyName = 'WYGIWYS'
