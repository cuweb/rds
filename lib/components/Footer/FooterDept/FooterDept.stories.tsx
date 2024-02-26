import type { Meta, StoryObj } from '@storybook/react'
import { FooterDept } from './FooterDept'
import { FooterButtons as footerButtons } from '../../../data/FooterData'

const meta: Meta<typeof FooterDept> = {
  title: 'Components/Footers/Departmental',
  component: FooterDept,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterDept>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  deptName: 'Information Technology Services',
  officeNumber: '400',
  buildingName: 'Pigiarvik (ᐱᒋᐊᕐᕕᒃ)',
  phone: '613-520-2600',
  email: 'noreply@carleton.ca',
  footerButtons: footerButtons,
}
