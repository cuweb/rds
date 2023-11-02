import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../Form/Form'

const meta: Meta<typeof Form> = {
  title: 'Components/Forms/Input',
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
    <Form onSubmit={() => undefined} schema={{}} initialValues={InitialValues}>
      <Form.Input label="Name" name="name" type="text" placeholder="Enter your name" />
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
