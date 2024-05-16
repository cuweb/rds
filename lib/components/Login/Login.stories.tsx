import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Login } from './Login'

const meta: Meta<typeof Login> = {
  title: 'Components/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Login>

export const Default: Story = {}

Default.args = {
  useSocial: false,
}

export const SocialLogins: Story = {
  args: {
    useSocial: true,
  },
}
