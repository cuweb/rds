import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Main } from './Main'

const meta: Meta<typeof Main> = {
  title: 'Layouts/Main',
  component: Main,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Main>

export const Primary: Story = {}

Primary.args = {
  maxWidth: '5xl',
  noProse: false,
  children: (
    <p>
      Left. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
      egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
      tristique dolor. Suspendisse vestibulum hendrerit. Aliquam blandit tellus odio, nec commodo est efficitur sit
      amet. Proin molestie, risus in mollis laoreet, lectus dui egestas augue, eu maximus velit dui sed quam.
      Pellentesque iaculis suscipit libero gravida tempus. Phasellus in egestas sapien ac libero.
    </p>
  ),
}
