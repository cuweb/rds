import type { Meta, StoryObj } from '@storybook/react'
import { FooterSimple } from './FooterSimple'
import {
  PrimaryLinks as primaryLinks,
  SecondaryLinks as secondaryLinks,
  SocialLinks as socialLinks,
  FooterButtons as footerButtons,
} from '../../../data/FooterData'

const meta: Meta<typeof FooterSimple> = {
  title: 'Components/Footers/Simple',
  component: FooterSimple,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterSimple>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  deptName: 'Information Technology Services',
  deptUrl: 'https://carleton.ca/its',
  primaryTitle: 'Primary Links',
  primaryLinks: primaryLinks,
  secondaryTitle: 'Secondary Links',
  secondaryLinks: secondaryLinks,
  socialLinks: socialLinks,
  footerButtons: footerButtons,
}
