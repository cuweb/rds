import type { Meta, StoryObj } from '@storybook/react'
import { FooterCookie } from './FooterCookie'

const meta: Meta<typeof FooterCookie> = {
  title: 'Components/Footers/Cookie',
  component: FooterCookie,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof FooterCookie>

export const Default: Story = () => {
  return <FooterCookie />
}

Default.storyName = 'Default FooterCookie Banner'
