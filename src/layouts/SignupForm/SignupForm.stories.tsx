import type { Meta, StoryObj } from '@storybook/react'
import { SignupForm } from './SignupForm'

const meta: Meta<typeof SignupForm> = {
  title: 'Layouts/SignupForm',
  component: SignupForm,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof SignupForm>

export const Primary: Story = {}

Primary.args = {
  header: `Poop Of The Month Club`,
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`,
}

export const MailChimp: Story = {
  args: {
    children: <SignupForm.MailChimp />,
  },
}

export const CampaignMonitor: Story = {
  args: {
    children: <SignupForm.CampaignMonitor />,
  },
}
