/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../components/Forms/Form/Form'

const meta: Meta<typeof Form> = {
  title: 'Forms/Form',
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

const formOnSubmit = async (values: any) => {
  alert('Submitted')
  console.log(values)
}

const InitialValues = {
  firstname: 'ish',
  description: ' sample description',
  regularviewer: '2',
  location: 'Carleton University, Colonel By Drive, Ottawa, ON, Canada',
  favsitcom: 'familymatter',
  favcharacters: ['kellykapowski', 'carltonbanks'],
}

export const Default: Story = {
  render: () => (
    <Form onSubmit={() => {}} schema={{}} initialValues={{ name: 'John Doe', email: 'johndoe@example.com' }}>
      Add input components inside the form as children
    </Form>
  ),
}

export const Example: Story = {
  render: (args) => (
    <Form {...args} onSubmit={formOnSubmit} schema={{}} initialValues={InitialValues}>
      <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

      <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

      <Form.Input label="Address" name="address" placeholder="Enter your street name and house number, if applicable" />

      <Form.WYSIWYG label="Event Description" name="description" placeholder="write some description..." />

      <Form.Select label="What is your favorite 90s sitcom?" name="favsitcom" />

      <Form.Radio
        label="How many of these shows did you watch regularly?"
        name="regularviewer"
        options={[{ name: '1', label: '1' }]}
      />

      <Form.Checkbox
        label="Who are your favourite 90s sitcom characters?"
        name="favcharacters"
        options={[{ name: 'name', label: 'name' }]}
      />

      <Form.Submit title="Submit Your Answers" />
    </Form>
  ),
}
