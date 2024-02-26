import type { Meta, StoryObj } from '@storybook/react'
import type { FormikValues } from 'formik'
import { Form } from './Form'
import * as yup from 'yup'

const meta: Meta<typeof Form> = {
  title: 'Deprecated/Forms/Base Form',
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

const formOnSubmit = async (values: FormikValues) => {
  alert('Submitted')
  console.log(values)
}

export const TestSchema = {
  firstname: {
    value: 'TEST',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required'),
  },
  lastname: {
    value: '',
    validation: yup.string().min(6, 'Name must be at least 6 characters long').required('Required'),
  },
}

export const Default: Story = {
  render: () => (
    <Form onSubmit={() => undefined} schema={{}}>
      {() => <form>Add input components inside the form as children</form>}
    </Form>
  ),
}

const onValidate = (file: HTMLImageElement, fileExists: boolean, isImage: boolean) => {
  return file && fileExists && isImage
}

const onUpload = async (file: File) => {
  return file.name
}

const onReset = async (reset: string) => {
  return reset
}

const setPreview = () => {
  return
}

export const Example: Story = {
  render: (args) => (
    <Form {...args} onSubmit={formOnSubmit} schema={TestSchema}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Form.Input label="First Name" name="firstname" placeholder="Enter your first name" required />

          <Form.Input label="Last Name" name="lastname" placeholder="Enter your last name" required />

          <Form.Input
            label="Address"
            name="address"
            placeholder="Enter your street name and house number, if applicable"
          />

          <Form.Select
            label="What is your favorite 90s sitcom?"
            name="favsitcom"
            options={[
              { value: 'name1', label: 'name1' },
              { value: 'name2', label: 'name2' },
              { value: 'name3', label: 'name3' },
            ]}
          />

          <Form.WYSIWYG
            label="Event Description"
            name="description"
            placeholder="write some description..."
            editor="textarea"
          />

          {/* <Form.PlacesAutoComplete name="location" placeholder="Please select a location..." /> */}

          <Form.DateTimePicker name="datetime" placeholder="Please select date and time..." />

          <Form.Radio
            label="How many of these shows did you watch regularly?"
            name="regularviewer"
            options={[
              { name: '1', label: '1' },
              { name: '2', label: '2' },
              { name: '3', label: '3' },
            ]}
          />

          <Form.Checkbox
            label="Who are your favourite 90s sitcom characters?"
            name="favcharacters"
            options={[
              { name: 'name1', label: 'name1', id: 1 },
              { name: 'name2', label: 'name2', id: 2 },
              { name: 'name3', label: 'name3', id: 3 },
            ]}
          />

          <Form.Upload
            label="Image"
            name="image"
            onValidate={onValidate}
            onUpload={onUpload}
            onReset={onReset}
            setPreview={setPreview}
          />

          <Form.Submit title="Submit Your Answers" />
        </form>
      )}
    </Form>
  ),
}
