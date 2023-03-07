//
// * Duplicate this file and rename to get started
//     File should share same name as component
//     Don't forget to add the .stories so your filename is Component.stories.tsx

// * Add all args to the primary version of the component
//     Controls in storybook become user editable only when they are set as args
//

import type { Meta, StoryObj } from '@storybook/react'
import { Body } from '../layouts/Body/Body'

const meta: Meta<typeof Body> = {
  title: 'Layouts/Body',
  component: Body,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Body>

export const Primary: Story = {}

Primary.args = {
  children: 'Body component',
}
