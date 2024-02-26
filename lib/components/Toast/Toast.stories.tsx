import { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Toast>

type ToastStoryType = {
  type: 'success' | 'error' | 'warning' | 'info'
  title?: string
  content?: string
}

const ToastStory: ToastStoryType[] = [
  {
    type: 'success',
    title: 'Success!',
    content: 'Records have been updated.',
  },
  {
    type: 'error',
    title: 'Error!',
    content: 'Unable to save record.',
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'You have lost internet connectivity',
  },
  {
    type: 'info',
    title: 'Information',
    content: 'You look like you need some coffee.',
  },
]

export const Default: Story = {
  render: (args) => (
    <Toast.Toaster>
      <Toast key={111} type={args.type}>
        <Toast.Title>Success</Toast.Title>
        <Toast.Content>Successfully created</Toast.Content>
      </Toast>
    </Toast.Toaster>
  ),
}

Default.args = {
  type: 'success',
}

export const Multiple: Story = {
  render: () => (
    <Toast.Toaster>
      {ToastStory.map((toast, index) => {
        return (
          <Toast key={index} type={toast.type}>
            <Toast.Title>{toast.title}</Toast.Title>
            <Toast.Content>{toast.content}</Toast.Content>
          </Toast>
        )
      })}
    </Toast.Toaster>
  ),
}
