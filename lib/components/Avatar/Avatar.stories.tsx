import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

const user = {
  image: {
    src: 'https://static.wikia.nocookie.net/freshprince/images/a/ac/1carlton.jpg',
    alt: '',
  },
  firstName: 'Web',
  lastName: 'Services',
}

const userNoImage = {
  firstName: 'Web',
  lastName: 'Services',
}

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

Primary.args = {
  user: { ...user },
  onClick: () => {
    alert('I am an alert ')
  },
}

export const FullCircle: Story = {}

FullCircle.args = {
  user: { ...user },
  isCircle: true,
  onClick: () => {
    alert('I am an alert ')
  },
}

export const NoImage: Story = {}

NoImage.args = {
  user: { ...userNoImage },
  onClick: () => {
    alert('I am an alert ')
  },
}

export const SizesSquare: Story = {
  render: () => (
    <div className="grid gap-8">
      <Avatar user={userNoImage} size="xs" />
      <Avatar user={userNoImage} size="sm" />
      <Avatar user={userNoImage} size="md" />
      <Avatar user={userNoImage} size="lg" />
      <Avatar user={userNoImage} size="xl" />
      <Avatar user={userNoImage} size="2xl" />
      <Avatar user={userNoImage} size="4xl" />
    </div>
  ),
}

export const SizesRounded: Story = {
  render: () => (
    <div className="grid gap-8">
      <Avatar user={userNoImage} size="xs" isCircle />
      <Avatar user={userNoImage} size="sm" isCircle />
      <Avatar user={userNoImage} size="md" isCircle />
      <Avatar user={userNoImage} size="lg" isCircle />
      <Avatar user={userNoImage} size="xl" isCircle />
      <Avatar user={userNoImage} size="2xl" isCircle />
      <Avatar user={userNoImage} size="4xl" isCircle />
    </div>
  ),
}
