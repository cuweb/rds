/* eslint-disable storybook/no-redundant-story-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
// import { Formik } from 'formik'
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

  return (
    <FormComponents initialValues={InputInitialValues} validationSchema={InputValidationSchema} onSubmit={onSubmit}>
      <FormComponents.FieldControl control="text" label="Label" name="inputText" required helper="Helper Text" />
      <ButtonGroup>
        <Button title="submit" type="submit" />
      </ButtonGroup>
    </FormComponents>
  )
}

Input.storyName = 'Input'
