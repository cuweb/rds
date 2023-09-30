import type { Meta, StoryObj } from '@storybook/react'
import { FooterDepartmental } from './FooterDepartmental'
import { FooterButtons as footerButtons } from '../../../data/FooterData'

const meta: Meta<typeof FooterDepartmental> = {
  title: 'Components/Footers/Departmental',
  component: FooterDepartmental,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}
export default meta
type Story = StoryObj<typeof FooterDepartmental>

export const DefaultTemplate: Story = {}

DefaultTemplate.args = {
  deptName: 'Information Technology Services',
  officeNumber: '400',
  buildingName: 'Pigiarvik (ᐱᒋᐊᕐᕕᒃ)',
  footerButtons: footerButtons,
}
