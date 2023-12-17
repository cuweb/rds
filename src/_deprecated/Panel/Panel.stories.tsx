import type { Meta, StoryObj } from '@storybook/react'
import { Panel } from './Panel'

const meta: Meta<typeof Panel> = {
  title: 'Layouts/Panel',
  component: Panel,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Panel>

export const Primary: Story = {}

Primary.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`,
  hasShadow: false,
  hasBorder: false,
  hasSpacing: false,
}

export const HasShadow: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`,
    hasShadow: true,
    hasBorder: false,
    hasSpacing: true,
  },
}

export const HasBorder: Story = {
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`,
    hasShadow: false,
    hasBorder: true,
    hasSpacing: true,
  },
}

export const ShadowBorder: Story = {
  name: 'Has Shadow & Border',
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`,
    hasShadow: true,
    hasBorder: true,
    hasSpacing: true,
  },
}

export const ConsecutivePanels: Story = {
  render: () => (
    <>
      <Panel hasBorder hasSpacing>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </Panel>
      <Panel hasBorder hasSpacing>
        <p>
          Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet,
          lectus dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus.
          Phasellus in egestas sapien ac libero.
        </p>
      </Panel>
    </>
  ),
}
