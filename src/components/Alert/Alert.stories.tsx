import { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type AlertStoryType = {
  type: 'success' | 'error' | 'warning' | 'info'
  textSize: 'small' | 'large'
  isPersistent: false
  title?: string
  content?: string
}

const AlertStory: AlertStoryType[] = [
  {
    type: 'success',
    title: 'Success!',
    content: 'Records have been updated.',
    textSize: 'small',
    isPersistent: false,
  },
  {
    type: 'error',
    title: 'Error!',
    content: 'Unable to save record.',
    textSize: 'small',
    isPersistent: false,
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'You have lost internet connectivity',
    textSize: 'small',
    isPersistent: false,
  },
  {
    type: 'info',
    title: 'Information',
    content: 'You look like you need some coffee.',
    textSize: 'small',
    isPersistent: false,
  },
]

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => (
    <Alert key={111} type={args.type} textSize={args.textSize} title="Title" content="Content goes here" />
  ),
}

Default.args = {
  type: 'success',
}

export const Stacked: Story = {
  render: () => (
    <>
      {AlertStory.map((alert, index) => {
        return <Alert key={index} type={alert.type} title={alert.title || 'Title'} content={alert.content} />
      })}
    </>
  ),
}

export const LargeText: Story = {
  render: (args) => (
    <Alert key={111} type={args.type} textSize={args.textSize} title="Success" content="Succesfully created" />
  ),
}

LargeText.args = {
  type: 'success',
  textSize: 'large',
}
