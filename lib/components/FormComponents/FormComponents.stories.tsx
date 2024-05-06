/* eslint-disable storybook/no-redundant-story-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FormComponents } from './FormComponents'
import { ButtonGroup } from '../ButtonGroup/ButtonGroup'
import { Button } from '../Button/Button'

const meta: Meta<typeof FormComponents> = {
  title: 'Components/FormComponents',
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof FormComponents>

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const Input: Story = () => {
  const InputInitialValues = {
    inputText: '',
  }

  const InputValidationSchema = Yup.object().shape({
    inputText: Yup.string().required('The field is required'),
  })

  const onSubmit = async (values: any, actions: any) => {
    actions.setSubmitting(true)
    alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: InputInitialValues,
    validationSchema: InputValidationSchema,
    onSubmit,
  })

  return (
    <FormComponents formikProps={formikProps}>
      <FormComponents.FieldGroup>
        <FormComponents.FieldControl
          control="text"
          label="Label"
          name="inputText"
          required
          helper="Helper Text"
          // disable={formikProps.isSubmitting}
        />
      </FormComponents.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </FormComponents>
  )
}

Input.storyName = 'Input'

export const Wysiwyg: Story = () => {
  const [editorContent, setEditorContent] = useState<string | null>('abc')

  const WysiwygInitialValues = {
    wysiwygtext: '',
  }

  const WysiwygValidationSchema = Yup.object().shape({
    wysiwygtext: Yup.string().required('The field is required'),
  })

  const onSubmit = async (values: any, actions: any) => {
    console.log(values, editorContent)

    alert('clicked')
    actions.setSubmitting(true)
    alert(values)
    // await sleep(1000)
    // alert(JSON.stringify(values, null, 2))
    actions.setSubmitting(false)
  }

  const formikProps = useFormik({
    initialValues: WysiwygInitialValues,
    validationSchema: WysiwygValidationSchema,
    onSubmit,
  })

  return (
    <FormComponents formikProps={formikProps}>
      <FormComponents.FieldGroup>
        <FormComponents.FieldControl
          control="text"
          label="Label"
          name="wysiwygtext"
          required
          helper="Helper Text"
          // disable={formikProps.isSubmitting}
        />
        <FormComponents.Editor setEditorContent={setEditorContent} editorContent={editorContent} />
      </FormComponents.FieldGroup>
      <ButtonGroup>
        <Button title="Submit" type="submit" />
      </ButtonGroup>
    </FormComponents>
  )
}

Wysiwyg.storyName = 'Wysiwyg'
