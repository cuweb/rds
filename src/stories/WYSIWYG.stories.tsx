/* eslint-disable @typescript-eslint/no-empty-function */
import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../components/Forms/Form/Form'
import ReactQuill from 'react-quill'

const meta: Meta<typeof Form> = {
  title: 'Forms/WSYWIG',
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

export const Default: Story = {
  render: () => (
    <Form onSubmit={() => {}} schema={{}} initialValues={InitialValues}>
      <Form.WYSIWYG
        editor={ReactQuill}
        label="Description"
        name="description"
        type="text"
        placeholder="Enter the description..."
      />
    </Form>
  ),
}

const InitialValues = {
  firstname: 'ish',
  description: ' sample description',
  regularviewer: '2',
  location: 'Carleton University, Colonel By Drive, Ottawa, ON, Canada',
  favsitcom: 'familymatter',
  favcharacters: ['kellykapowski', 'carltonbanks'],
}
