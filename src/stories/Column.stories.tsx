import type { Meta, StoryObj } from '@storybook/react'
import { Column } from '../layouts/Column/Column'

const meta: Meta<typeof Column> = {
  title: 'Layouts/Column',
  component: Column,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta
type Story = StoryObj<typeof Column>

export const Primary: Story = {}

Primary.args = {
  children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
  vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
  dolor. Suspendisse vestibulum hendrerit.`,
}

export const TwoCol: Story = {
  name: 'Two Columns',
  render: () => (
    <Column maxWidth="5xl" cols="2" gridGap="10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
        vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
        dolor. Suspendisse vestibulum hendrerit.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
    </Column>
  ),
}

export const ThreeCol: Story = {
  name: 'Three Columns',
  render: () => (
    <Column maxWidth="5xl" cols="3" gridGap="10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
        vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
        dolor. Suspendisse vestibulum hendrerit.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
    </Column>
  ),
}

export const FourCol: Story = {
  name: 'Three Columns',
  render: () => (
    <Column maxWidth="7xl" cols="4" gridGap="10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in, egestas
        vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et tristique
        dolor. Suspendisse vestibulum hendrerit.
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam augue turpis, feugiat vitae viverra in,
          egestas vitae nulla. Quisque auctor ultrices mauris, et semper urna aliquam quis. Duis sed malesuada metus, et
          tristique dolor. Suspendisse vestibulum hendrerit.
        </p>
      </p>
      <p>
        Aliquam blandit tellus odio, nec commodo est efficitur sit amet. Proin molestie, risus in mollis laoreet, lectus
        dui egestas augue, eu maximus velit dui sed quam. Pellentesque iaculis suscipit libero gravida tempus. Phasellus
        in egestas sapien ac libero.
      </p>
    </Column>
  ),
}
