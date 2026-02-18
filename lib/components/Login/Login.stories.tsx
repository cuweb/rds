import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Login } from './Login'
import { Main } from '../../layouts/Main/Main'

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

export const Primary: Story = {
  args: {
    useSocial: false,
  },
  render: (args) => {
    return (
      <Main>
        <Login {...args} />
      </Main>
    )
  },
}

const clickCufed = () => {
  console.log('HEllo')
}
const clickGoogle = () => {
  console.log('GOOGLE')
}
const clicklinkedIn = () => {
  console.log('LINKEDIN')
}
const clickTwitter = () => {
  console.log('TWITTER')
}

const clickHandlers = {
  default: clickCufed,
  google: clickGoogle,
  linkedIn: clicklinkedIn,
  twitter: clickTwitter,
}
export const SocialLogins: Story = {
  args: {
    useSocial: true,
    onClickHandler: clickHandlers,
  },
  render: (args) => {
    return (
      <Main>
        <Login {...args} />
      </Main>
    )
  },
}

export const LoginErrorShort: Story = {
  args: {
    errorTitle: 'Error: Please Contact Site Administrator',
  },
  render: (args) => {
    return (
      <Main>
        <Login {...args} />
      </Main>
    )
  },
}

export const LoginErrorDescription: Story = {
  args: {
    errorTitle: 'Login Error',
    errorDesc: 'Please ensure you are connected to the VPN and try again.',
  },
  render: (args) => {
    return (
      <Main>
        <Login {...args} />
      </Main>
    )
  },
}
